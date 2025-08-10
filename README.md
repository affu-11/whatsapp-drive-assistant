# WhatsApp-Driven Google Drive Assistant (n8n Workflow)
# Overview
This project is a WhatsApp → Google Drive Assistant built using n8n.
It listens to WhatsApp messages via Twilio and performs actions on Google Drive such as:
LIST /FolderName — List files in a folder
DELETE /FolderName/file.pdf — Delete a file
MOVE /FolderName/file.pdf /Archive — Move a file
SUMMARY /FolderName — Summarize document contents (PDF/DOCX/TXT) using OpenAI GPT-4o
It also logs all actions into Google Sheets for auditing.

# Features
Twilio WhatsApp integration
Google Drive API for file operations
Google Sheets for logging
OpenAI GPT-4o for AI-powered summaries
Safe demo with placeholder credentials

# Setup Instructions
1. Install & Run n8n
npm install -g n8n
n8n
Open http://localhost:5678 in your browser.

2. Import the Workflow
Click Import → From File in n8n.
Select whatsapp_drive_demo.json.
<img width="1920" height="1080" alt="Screenshot 2025-08-10 115215" src="https://github.com/user-attachments/assets/9afa2408-720b-4902-9ecc-871467c7064a" />


4. Add Your Credentials
Replace placeholders in nodes with your own:
Twilio (Account SID, Auth Token, WhatsApp Number)
Google Drive API credentials
Google Sheets API credentials
OpenAI API Key

5. Deploy & Test
Connect Twilio Sandbox for WhatsApp

Send commands like:
pgsql
LIST /ProjectX
DELETE /ProjectX/report.pdf
MOVE /ProjectX/report.pdf /Archive
SUMMARY /ProjectX
Check Google Sheets for log updates.

# Files in Repo
whatsapp_drive_demo.json → Ready-to-import n8n workflow
README.md → Setup and usage guide
.env.example → Example environment variables (optional)

# Disclaimer
This repo contains placeholders instead of real credentials.
You must add your own API keys to use it.
Demo is for educational purposes only.
