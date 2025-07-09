# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (the one that will receive the emails)
5. Note down the **Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:** Nuevo mensaje de contacto - Residencial Blanes

**Body:**
```
Hola,

Has recibido un nuevo mensaje de contacto desde el sitio web de Residencial Blanes:

**Nombre:** {{from_name}}
**Email:** {{from_email}}
**Teléfono:** {{from_phone}}
**Mensaje:**
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de Residencial Blanes.
```

4. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Your Code
Replace the placeholder values in `src/App.js`:

```javascript
// Replace these values in the handleSubmit function:
'YOUR_SERVICE_ID' → Your EmailJS Service ID
'YOUR_TEMPLATE_ID' → Your EmailJS Template ID  
'YOUR_PUBLIC_KEY' → Your EmailJS Public Key
'your-email@gmail.com' → Your Gmail address
```

## Step 6: Test
1. Start your development server: `npm start`
2. Fill out the contact form
3. Submit and check your Gmail inbox

## Important Notes:
- The free plan allows 200 emails per month
- Make sure your Gmail account has "Less secure app access" enabled or use App Passwords
- The emails will be sent from your connected Gmail account to the same address

## Troubleshooting:
- Check the browser console for any error messages
- Verify all IDs and keys are correct
- Ensure your Gmail account is properly connected in EmailJS 