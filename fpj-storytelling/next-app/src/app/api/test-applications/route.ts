import { NextResponse } from 'next/server';
import { memoryStore, metrics } from '@/lib/applicationStore';

export async function GET() {
  // Add a test application if store is empty
  if (memoryStore.length === 0) {
    const testApp = {
      id: 'test-123',
      name: 'Test Student',
      email: 'test@student.com',
      phone: '+1234567890',
      institution: 'Test University',
      year: '3rd Year',
      course: 'B.Pharm',
      motivation: 'Test application for debugging',
      instagram: '@teststudent',
      linkedin: 'https://linkedin.com/in/teststudent',
      referralCode: 'FPJTS12001234',
      createdAt: new Date().toISOString(),
      status: 'approved' as const,
      approvalDate: new Date().toISOString(),
      adminNotes: 'Test application added for debugging'
    };
    
    memoryStore.push(testApp);
    console.log('Added test application:', testApp);
  }

  return NextResponse.json({
    message: 'Test endpoint',
    memoryStoreLength: memoryStore.length,
    applications: memoryStore,
    metrics
  });
}