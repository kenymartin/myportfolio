# 📧 EmailJS Setup Guide

Your contact form is now configured to use **EmailJS** for sending emails directly from the frontend (no backend required!).

## 🚀 Quick Setup Steps

### 1. Create a Free EmailJS Account
- Visit: https://www.emailjs.com/
- Sign up for a free account (200 emails/month free)

### 2. Create an Email Service
1. Go to **Email Services** → **Add New Service**
2. Choose your email provider (Gmail, Outlook, etc.)
3. Connect your email account
4. Copy your **Service ID**

### 3. Create an Email Template
1. Go to **Email Templates** → **Create New Template**
2. Use these template variables:
   ```
   {{from_name}}    - Sender's name
   {{from_email}}   - Sender's email
   {{subject}}       - Email subject
   {{message}}       - Message content
   {{to_email}}      - Your email address
   ```
3. Example template:
   ```
   Subject: {{subject}}
   
   You have a new message from your portfolio contact form!
   
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
4. Copy your **Template ID**

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (User ID)

### 5. Configure Environment Variables

Create a `.env.local` file in the root of your project:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important:** Replace the placeholder values with your actual EmailJS credentials!

### 6. Restart Development Server

After adding environment variables:
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## 🔒 Security Notes

- The Public Key is safe to expose in frontend code
- These are client-side environment variables (NEXT_PUBLIC_ prefix)
- For production deployment, add these same variables in your hosting platform (Vercel, Netlify, etc.)

## 🌐 Production Deployment

### Vercel
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add all three `NEXT_PUBLIC_EMAILJS_*` variables
4. Redeploy

### Netlify
1. Go to **Site settings** → **Environment variables**
2. Add all three `NEXT_PUBLIC_EMAILJS_*` variables
3. Redeploy

## ✅ Testing

1. Fill out the contact form
2. Click "Send Message"
3. Check your email inbox
4. You should receive the message!

## 🐛 Troubleshooting

**Form shows error message:**
- Check browser console for errors
- Verify all environment variables are set correctly
- Ensure EmailJS service is active
- Check EmailJS dashboard for delivery logs

**Email not received:**
- Check spam folder
- Verify email service is connected in EmailJS dashboard
- Check EmailJS usage limits (200/month free)

## 📚 Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

---

**Note:** The form will show an error if EmailJS is not configured, but the UI will still work for testing purposes.

