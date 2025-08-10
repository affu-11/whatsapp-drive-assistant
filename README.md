# WhatsApp-Driven Google Drive Assistant

## Setup
1. Install Docker
2. Run:
   ```bash
   docker run -it --rm -p 5678:5678 -v ~/.n8n:/home/node/.n8n --env-file .env n8nio/n8n
   ```
3. Import `workflow.json` in n8n UI
4. Set credentials for Twilio, Google Drive, OpenAI
5. Test via WhatsApp commands:
   - LIST /folder
   - DELETE /folder/file
   - MOVE /folder/file /destination
   - SUMMARY /folder
