import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertVisitorSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import * as path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Middleware to track visitors
  app.use(async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Skip tracking for API requests and static assets
      if (!req.path.startsWith('/api') && !req.path.includes('.')) {
        const visitorData = {
          ipAddress: req.ip || req.socket.remoteAddress || '',
          userAgent: req.headers['user-agent'] || '',
          page: req.path || '/',
          referrer: req.headers.referer || '',
        };
        
        // Validate with zod schema and save to database
        const validVisitorData = insertVisitorSchema.parse(visitorData);
        await storage.trackVisitor(validVisitorData);
      }
    } catch (error) {
      console.error('Error tracking visitor:', error);
      // Continue even if tracking fails
    }
    next();
  });

  // Contact form submission endpoint
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      // Validate form data with Zod schema
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store in database
      const submission = await storage.createContactSubmission(validatedData);
      
      res.status(200).json({ 
        success: true,
        message: 'Message received successfully!', 
        submissionId: submission.id 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      
      if (error instanceof ZodError) {
        // Return validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false,
          message: 'Validation failed',
          errors: validationError.details 
        });
      }
      
      res.status(500).json({ 
        success: false,
        message: 'Failed to process your message. Please try again later.' 
      });
    }
  });

  // Resume download endpoint
  app.get('/api/resume', (req: Request, res: Response) => {
    const resumePath = path.join(process.cwd(), 'attached_assets', 'Nithin AI ..............resume .pdf');
    res.download(resumePath, 'Nithin_AI_Resume.pdf', (err) => {
      if (err) {
        console.error('Error downloading resume:', err);
        res.status(500).json({ 
          success: false, 
          message: 'Failed to download resume. Please try again later.' 
        });
      }
    });
  });

  // Get visitor statistics endpoint (could be protected in production)
  app.get('/api/stats', async (req: Request, res: Response) => {
    try {
      const stats = await storage.getVisitorStats();
      res.status(200).json({ 
        success: true,
        data: stats
      });
    } catch (error) {
      console.error('Error fetching visitor stats:', error);
      res.status(500).json({ 
        success: false,
        message: 'Failed to fetch visitor statistics.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
