# Student Partner Application Workflow

## Overview
This document explains the complete workflow for the FPJ (Futuristic Pharma Journey) Student Partner Program from both student and admin perspectives.

## Student Application Process

### 1. Application Submission
Students visit `/student-partner` page and fill out the application form with:
- **Personal Information**: Name, email, phone
- **Academic Information**: Institution, year of study, course
- **Social Media**: Instagram, LinkedIn (optional)
- **Motivation**: Why they want to become a partner
- **Referrals**: How they heard about FPJ (optional)

### 2. Form Validation & Security
- **Client-side validation**: Required fields, email format
- **Server-side validation**: Comprehensive field validation
- **Spam protection**: Honeypot field to prevent bot submissions
- **Rate limiting**: Prevents spam submissions
- **Database storage**: Supabase with automatic timestamping

### 3. Application Status
After submission, applications start with `status: 'pending'` and await admin review.

## Admin Management Process

### 1. Admin Authentication
- Access admin dashboard at `/admin`
- Secure authentication using Bearer token (stored in environment variables)
- For production: Recommend upgrading to JWT/OAuth2/Clerk authentication

### 2. Application Review Dashboard
Admin dashboard provides:
- **Overview Statistics**: Total applications, pending count, active partners
- **Application Filtering**: View all, pending, approved, or rejected applications
- **Detailed Application View**: Full application details in modal
- **Real-time Status Updates**: Live application status management

### 3. Application Actions

#### Approval Process
1. **Review Application**: Click "Review" to open detailed modal
2. **Approve Application**: Click "Approve" button
3. **Automatic Processing**:
   - Status changes to `approved`
   - Unique referral code generated (format: `FPJ[Initials][EmailCode][4DigitRandom]`)
   - Approval timestamp recorded
   - Database updated via API call
4. **Referral Code Generation**: 
   - Example: John Smith (john.smith@university.edu) → `FPJJSJO1234`
   - Ensures uniqueness with database constraints
5. **Next Steps**: 
   - Manual email notification to student (TODO: Automate)
   - Student receives referral code for partner benefits

#### Rejection Process
1. **Review Application**: Open application details
2. **Reject Application**: Click "Reject" with optional reason
3. **Automatic Processing**:
   - Status changes to `rejected`
   - Admin notes recorded with rejection reason
   - Rejection timestamp recorded
   - Database updated via API call
4. **Next Steps**: 
   - Manual email notification to student (TODO: Automate)

## Technical Implementation

### Database Schema (Supabase)
```sql
-- Core application fields
CREATE TABLE partner_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  institution VARCHAR(255) NOT NULL,
  year VARCHAR(10) NOT NULL,
  course VARCHAR(255),
  motivation TEXT NOT NULL,
  instagram VARCHAR(255),
  linkedin VARCHAR(255),
  referrals TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  
  -- Workflow fields
  status VARCHAR(20) DEFAULT 'pending',
  referral_code VARCHAR(20) UNIQUE,
  approval_date TIMESTAMP,
  rejection_date TIMESTAMP,
  admin_notes TEXT
);
```

### API Endpoints

#### `/api/partner-applications` (POST)
- **Purpose**: Student application submission
- **Features**: Validation, spam protection, rate limiting
- **Response**: Success confirmation or error details

#### `/api/partner-applications/admin` (GET)
- **Purpose**: Fetch all applications for admin review
- **Authentication**: Bearer token required
- **Response**: Array of applications with all details

#### `/api/partner-applications/admin` (POST)
- **Purpose**: Approve or reject applications
- **Authentication**: Bearer token required
- **Actions**: 
  - `approve`: Generates referral code, updates status
  - `reject`: Updates status with reason
- **Response**: Success confirmation with referral code (for approvals)

### Referral Code Algorithm
```javascript
const generateReferralCode = (name, email) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  const emailCode = email.split('@')[0].slice(0, 2).toUpperCase();
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `FPJ${initials}${emailCode}${randomNum}`;
};
```

## Security Considerations

### Current Implementation
- Bearer token authentication for admin access
- Environment variable storage for sensitive tokens
- Honeypot spam protection
- Rate limiting on submissions
- Input validation and sanitization

### Production Recommendations
1. **Upgrade Authentication**: Implement JWT tokens or OAuth2
2. **Email Integration**: Automated email notifications (SendGrid/Nodemailer)
3. **Audit Logging**: Track all admin actions
4. **Role-based Access**: Multiple admin permission levels
5. **HTTPS Enforcement**: Ensure secure communication
6. **Token Rotation**: Regular admin token updates

## Future Enhancements

### Immediate (TODO)
1. **Automated Email Notifications**:
   - Approval emails with referral codes
   - Rejection emails with feedback
   - Application confirmation emails

2. **Enhanced Admin Features**:
   - Bulk actions (approve/reject multiple)
   - Advanced filtering and search
   - Export applications to CSV
   - Application analytics and reporting

3. **Student Portal**:
   - Application status tracking
   - Partner dashboard with resources
   - Referral code usage tracking

### Long-term
1. **Partner Benefits System**: Integration with e-commerce/learning platforms
2. **Communication System**: In-app messaging between admins and students
3. **Analytics Dashboard**: Partner performance metrics
4. **Mobile App**: Native mobile application for students

## Environment Setup

### Required Environment Variables
```
# Admin authentication
ADMIN_BEARER_TOKEN=your-secure-admin-token-here

# Supabase configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Email service (for future implementation)
SENDGRID_API_KEY=your-sendgrid-key
EMAIL_FROM=admin@fpj-storytelling.com
```

### Database Migration
Run the SQL migration to add workflow columns:
```bash
# Apply the migration in Supabase dashboard or via CLI
psql -f migrations/20251002_add_application_workflow.sql
```

## Summary

The student partner application system provides a complete workflow from application submission to partner approval. Students apply through a beautiful, secure form, and admins manage applications through a comprehensive dashboard with filtering, review, and action capabilities. The system generates unique referral codes and maintains detailed application tracking with proper status management.

The current implementation is production-ready with basic security features, and the documented enhancements provide a clear roadmap for scaling the system as the partner program grows.