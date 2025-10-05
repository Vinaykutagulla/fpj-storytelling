"use client";
import React, { useState, useEffect } from 'react';

interface Application {
  id: string;
  name: string;
  email: string;
  institution: string;
  year: string;
  motivation: string;
  phone?: string;
  course?: string;
  instagram?: string;
  linkedin?: string;
  referrals?: string;
  created_at: string;
  status?: 'pending' | 'approved' | 'rejected';
  referral_code?: string;
  approval_date?: string;
  admin_notes?: string;
}

const generateReferralCode = (name: string, email: string): string => {
  // Generate unique referral code: FPJ + initials + random 4 digits
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  const emailCode = email.split('@')[0].slice(0, 2).toUpperCase();
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `FPJ${initials}${emailCode}${randomNum}`;
};

export default function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [adminToken, setAdminToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPasswordDialog, setShowPasswordDialog] = useState(true);

  // Simple admin access - check for basic password
  const checkAdminAccess = (password: string) => {
    if (password === 'admin123' || password === 'firstpharmajob') {
      setIsAuthenticated(true);
      setAdminToken('simple-admin-access');
      setShowPasswordDialog(false);
      fetchApplications();
      return true;
    }
    alert('Invalid password. Try: admin123');
    return false;
  };

  const filteredApplications = applications.filter(app => {
    if (statusFilter === 'all') return true;
    return (app.status || 'pending') === statusFilter;
  });

  const fetchApplications = async () => {
    if (!isAuthenticated) return;
    
    try {
      // Try without authentication first to see if apps are there
      const response = await fetch('/api/partner-applications/admin');
      
      if (response.ok) {
        const data = await response.json();
        setApplications(data.items || []);
        console.log('Applications loaded:', data.items?.length || 0);
      } else {
        console.error('Failed to fetch applications');
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchApplications();
    }
  }, [isAuthenticated]);

  const approveApplication = async (app: Application) => {
    try {
      const response = await fetch('/api/partner-applications/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify({
          action: 'approve',
          applicationId: app.id
        })
      });

      const result = await response.json();
      
      if (response.ok) {
        // Update local state
        const updatedApp = {
          ...app,
          status: 'approved' as const,
          referral_code: result.referralCode,
          approval_date: new Date().toISOString()
        };
        setApplications(prev => prev.map(a => a.id === app.id ? updatedApp : a));
        
        alert(`Application approved! Referral code: ${result.referralCode}`);
        setSelectedApp(null);
      } else {
        alert(`Error: ${result.error || 'Failed to approve application'}`);
      }
    } catch (error) {
      console.error('Error approving application:', error);
      alert('Error approving application');
    }
  };

  const rejectApplication = async (app: Application, reason: string) => {
    try {
      const response = await fetch('/api/partner-applications/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify({
          action: 'reject',
          applicationId: app.id,
          reason
        })
      });

      const result = await response.json();
      
      if (response.ok) {
        // Update local state
        const updatedApp = {
          ...app,
          status: 'rejected' as const,
          admin_notes: reason
        };
        setApplications(prev => prev.map(a => a.id === app.id ? updatedApp : a));
        
        alert('Application rejected successfully');
        setSelectedApp(null);
      } else {
        alert(`Error: ${result.error || 'Failed to reject application'}`);
      }
    } catch (error) {
      console.error('Error rejecting application:', error);
      alert('Error rejecting application');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Access</h1>
          <p className="text-slate-600 mb-4 text-center">Enter admin password to access dashboard</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            checkAdminAccess(passwordInput);
          }}>
            <input
              type="password"
              placeholder="Enter password (hint: admin123)"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4 text-center"
              autoFocus
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 font-medium"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Student Partner Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600">
                {applications.length} applications
              </span>
              <button
                onClick={fetchApplications}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600">
              {applications.filter(a => !a.status || a.status === 'pending').length}
            </div>
            <div className="text-slate-600">Pending Review</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600">
              {applications.filter(a => a.status === 'approved').length}
            </div>
            <div className="text-slate-600">Approved</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-red-600">
              {applications.filter(a => a.status === 'rejected').length}
            </div>
            <div className="text-slate-600">Rejected</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-purple-600">
              {applications.filter(a => a.referral_code).length}
            </div>
            <div className="text-slate-600">Active Partners</div>
          </div>
        </div>

        {/* Applications Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold">Applications</h2>
            <div className="flex gap-2">
              <select 
                value={statusFilter} 
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-3 py-2 border rounded-lg text-sm"
              >
                <option value="all">All Applications ({applications.length})</option>
                <option value="pending">Pending ({applications.filter(a => (a.status || 'pending') === 'pending').length})</option>
                <option value="approved">Approved ({applications.filter(a => a.status === 'approved').length})</option>
                <option value="rejected">Rejected ({applications.filter(a => a.status === 'rejected').length})</option>
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">Student Details</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">Contact</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">Academic Info</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">Status</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">Referral Code</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50">
                    <td className="px-4 py-4">
                      <div>
                        <div className="font-medium text-slate-900">{app.name}</div>
                        <div className="text-sm text-slate-500">Applied: {new Date(app.created_at).toLocaleDateString()}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="space-y-1">
                        <div className="text-sm text-slate-900">📧 {app.email}</div>
                        {app.phone && <div className="text-sm text-slate-900">📱 {app.phone}</div>}
                        {app.instagram && <div className="text-sm text-slate-600">📷 {app.instagram}</div>}
                        {app.linkedin && <div className="text-sm text-slate-600">💼 LinkedIn</div>}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="space-y-1">
                        <div className="font-medium text-slate-900">{app.institution}</div>
                        <div className="text-sm text-slate-600">{app.course || 'Course not specified'}</div>
                        <div className="text-sm text-slate-600">Year: {app.year}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        app.status === 'approved' ? 'bg-green-100 text-green-800' :
                        app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {app.status || 'pending'}
                      </span>
                      {app.approval_date && (
                        <div className="text-xs text-slate-500 mt-1">
                          Approved: {new Date(app.approval_date).toLocaleDateString()}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      {app.referral_code ? (
                        <div>
                          <span className="font-mono text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                            {app.referral_code}
                          </span>
                          <button 
                            onClick={() => navigator.clipboard.writeText(app.referral_code!)}
                            className="ml-2 text-xs text-blue-600 hover:text-blue-700"
                            title="Copy to clipboard"
                          >
                            📋 Copy
                          </button>
                        </div>
                      ) : (
                        <span className="text-slate-400">Not generated</span>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <button
                        onClick={() => setSelectedApp(app)}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm px-3 py-1 rounded border border-blue-600 hover:bg-blue-50"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Application Review Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Review Application</h3>
                <button
                  onClick={() => setSelectedApp(null)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="px-6 py-4 space-y-6">
              {/* Basic Information */}
              <div>
                <h4 className="text-lg font-medium text-slate-900 mb-3">Personal Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-600">Full Name</label>
                    <div className="text-slate-900 font-medium">{selectedApp.name}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600">Email Address</label>
                    <div className="text-slate-900">{selectedApp.email}</div>
                  </div>
                  {selectedApp.phone && (
                    <div>
                      <label className="block text-sm font-medium text-slate-600">Phone Number</label>
                      <div className="text-slate-900">{selectedApp.phone}</div>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-slate-600">Application Date</label>
                    <div className="text-slate-900">{new Date(selectedApp.created_at).toLocaleDateString()}</div>
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h4 className="text-lg font-medium text-slate-900 mb-3">Academic Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-600">Institution</label>
                    <div className="text-slate-900 font-medium">{selectedApp.institution}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600">Current Year</label>
                    <div className="text-slate-900">{selectedApp.year}</div>
                  </div>
                  {selectedApp.course && (
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-slate-600">Course</label>
                      <div className="text-slate-900">{selectedApp.course}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Social Media */}
              {(selectedApp.instagram || selectedApp.linkedin) && (
                <div>
                  <h4 className="text-lg font-medium text-slate-900 mb-3">Social Media</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedApp.instagram && (
                      <div>
                        <label className="block text-sm font-medium text-slate-600">Instagram</label>
                        <div className="text-slate-900">{selectedApp.instagram}</div>
                      </div>
                    )}
                    {selectedApp.linkedin && (
                      <div>
                        <label className="block text-sm font-medium text-slate-600">LinkedIn</label>
                        <div className="text-slate-900">
                          <a href={selectedApp.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            View Profile
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Status and Referral Code */}
              <div>
                <h4 className="text-lg font-medium text-slate-900 mb-3">Application Status</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-600">Current Status</label>
                    <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                      selectedApp.status === 'approved' ? 'bg-green-100 text-green-800' :
                      selectedApp.status === 'rejected' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {selectedApp.status || 'pending'}
                    </span>
                  </div>

                  {selectedApp.referral_code && (
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-green-800">Referral Code</div>
                          <div className="font-mono text-xl text-green-700">{selectedApp.referral_code}</div>
                        </div>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(selectedApp.referral_code!);
                            alert('Referral code copied to clipboard!');
                          }}
                          className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                        >
                          📋 Copy Code
                        </button>
                      </div>
                      {selectedApp.approval_date && (
                        <div className="text-sm text-green-600 mt-2">
                          Approved on: {new Date(selectedApp.approval_date).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Admin Notes */}
              {selectedApp.admin_notes && (
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Admin Notes</label>
                  <div className="bg-slate-50 p-3 rounded-lg text-slate-900">
                    {selectedApp.admin_notes}
                  </div>
                </div>
              )}
            </div>
            
            <div className="px-6 py-4 border-t bg-slate-50 flex gap-3 justify-end">
              <button
                onClick={() => setSelectedApp(null)}
                className="px-4 py-2 text-slate-600 hover:text-slate-800"
              >
                Cancel
              </button>
              {(!selectedApp.status || selectedApp.status === 'pending') && (
                <>
                  <button
                    onClick={() => {
                      const reason = prompt('Rejection reason:');
                      if (reason) rejectApplication(selectedApp, reason);
                    }}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => approveApplication(selectedApp)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Approve & Generate Code
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}