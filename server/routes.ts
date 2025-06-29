import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {

  // Contact form submission endpoint
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      console.log(`New contact submission from ${contact.name} (${contact.email})`);
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id 
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit contact form" 
      });
    }
  });

  // Get all contacts endpoint (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "client/public/Anand_Yadav_Resume.pdf");
      res.download(resumePath, "Anand_Yadav_Resume.pdf", (err) => {
        if (err) {
          console.error("Error downloading resume:", err);
          res.status(404).json({ 
            success: false, 
            message: "Resume file not found" 
          });
        }
      });
    } catch (error) {
      console.error("Error serving resume:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to serve resume" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
