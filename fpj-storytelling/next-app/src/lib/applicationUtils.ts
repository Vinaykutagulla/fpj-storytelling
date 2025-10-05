// Utility functions for partner applications

export const generateReferralCode = (name: string, email: string): string => {
  // Generate unique referral code: FPJ + initials + random 4 digits
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  const emailCode = email.split('@')[0].slice(0, 2).toUpperCase();
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `FPJ${initials}${emailCode}${randomNum}`;
};

export const sendApprovalEmail = async (email: string, name: string, referralCode: string) => {
  // For now, just log the email that would be sent
  console.log(`
    ===============================
    📧 EMAIL NOTIFICATION
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
    ===============================
  `);
  
  // TODO: Implement actual email sending using services like:
  // - Resend
  // - SendGrid  
  // - Nodemailer with SMTP
  // - Amazon SES
  
  return { success: true, message: 'Email sent successfully (logged to console)' };
};