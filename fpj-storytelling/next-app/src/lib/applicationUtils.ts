// Utility functions for partner applications
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export const generateReferralCode = (name: string, email: string): string => {
  // Generate unique referral code: FPJ + initials + random 4 digits
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  const emailCode = email.split('@')[0].slice(0, 2).toUpperCase();
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `FPJ${initials}${emailCode}${randomNum}`;
};

export const sendApprovalEmail = async (email: string, name: string, referralCode: string) => {
  // Check if Resend is configured
  if (!process.env.RESEND_API_KEY) {
    console.log(`
      ===============================
      📧 EMAIL NOTIFICATION (Console Only - No API Key)
      ===============================
      To: ${email}
      Subject: Welcome to FirstPharmaJob - Your Referral Code
      
      Dear ${name},
      
      Congratulations! Your application to become a FirstPharmaJob Student Partner has been approved! 🎉
      
      Your unique referral code is: ${referralCode}
      
      You can now start referring students to our platform and earn rewards for each successful referral.
      
      Get started at: https://firstpharmajob.com/student-partner
      
      Best regards,
      FirstPharmaJob Team
      
      💡 To enable real emails: Add RESEND_API_KEY to environment variables
      ===============================
    `);
    return { success: true, message: 'Email logged to console (add RESEND_API_KEY for real emails)' };
  }

  try {
    // Send actual email using Resend
    if (!resend) {
      throw new Error('Resend not configured');
    }
    const { data, error } = await resend.emails.send({
      from: 'FirstPharmaJob <onboarding@firstpharmajob.com>', // Use your verified domain
      to: [email],
      subject: 'Welcome to FirstPharmaJob - Your Referral Code 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background-color: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #1e40af; text-align: center; margin-bottom: 30px;">
              🎉 Welcome to FirstPharmaJob!
            </h1>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Dear <strong>${name}</strong>,
            </p>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Congratulations! Your application to become a FirstPharmaJob Student Partner has been <strong>approved</strong>! 🎉
            </p>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
              <h2 style="color: #1e40af; margin-bottom: 10px;">Your Referral Code</h2>
              <div style="font-family: 'Courier New', monospace; font-size: 24px; font-weight: bold; color: #059669; background-color: #ecfdf5; padding: 15px; border-radius: 6px; border: 2px solid #10b981;">
                ${referralCode}
              </div>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              You can now start referring students to our platform and earn rewards for each successful referral.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://firstpharmajob.com/student-partner" 
                 style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                Get Started Now
              </a>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 40px;">
              Best regards,<br>
              <strong>FirstPharmaJob Team</strong>
            </p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            
            <p style="color: #9ca3af; font-size: 12px; text-align: center;">
              This email was sent to ${email}. If you have any questions, please contact us at support@firstpharmajob.com
            </p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend email error:', error);
      return { success: false, error: error.message };
    }

    console.log('✅ Email sent successfully:', data);
    return { success: true, message: 'Email sent successfully via Resend', data };

  } catch (error: any) {
    console.error('Email sending error:', error);
    return { success: false, error: error.message };
  }
};