import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Partner Program | Pharmaceutical Training & Certification | FirstPharmaJob',
  description: '🎓 Join our Student Partner Program and start your pharmaceutical career! Get comprehensive clinical research training, industry certification, and guaranteed job placement. Earn while you learn with referral rewards.',
  keywords: 'student partner program, pharmaceutical training for students, clinical research certification, pharma student placement, pharmaceutical internship, CRA training for students, drug safety training, student pharmaceutical program, pharma career for students, clinical research student program, pharmaceutical certification course',
  openGraph: {
    title: 'Student Partner Program | Pharmaceutical Training | FirstPharmaJob',
    description: '🎓 Join our Student Partner Program! Get comprehensive pharmaceutical training, certification, and guaranteed job placement. Start your pharma career as a student.',
    url: 'https://firstpharmajob.com/student-partner',
  }
};

export default function StudentPartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}