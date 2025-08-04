import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { ZodError } from "zod";
import { sendEmail, createContactEmailHTML } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      const emailHTML = createContactEmailHTML(
        submission.name,
        submission.email,
        submission.subject,
        submission.message
      );

      const emailSent = await sendEmail({
        from: 'me@stevenbenjamin.com',
        to: 'me@stevenbenjamin.com',
        subject: `Portfolio Contact: ${submission.subject}`,
        html: emailHTML,
        replyTo: submission.email
      });

      if (!emailSent) {
        console.warn("Email failed to send, but form submission was saved");
      }

      console.log("Contact form submission received:", {
        name: submission.name,
        email: submission.email,
        subject: submission.subject,
        emailSent: emailSent
      });

      res.status(201).json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon.",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form. Please try again." 
        });
      }
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
