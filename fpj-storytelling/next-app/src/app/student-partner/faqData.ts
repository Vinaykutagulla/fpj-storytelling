// Central FAQ data so it can be used for both rendering and JSON-LD generation.
// Keep questions concise and answers clear; update here when modifying FAQ UI.
export interface FAQItem { q: string; a: string; }

export const faqItems: FAQItem[] = [
  { q: 'Who can apply?', a: 'Active B.Pharm, M.Pharm, Pharm.D or life science students with campus or online engagement reach.' },
  { q: 'How do I get paid?', a: 'Monthly UPI payout for all validated prior-month referrals processed by the 10th.' },
  { q: 'What is a successful referral?', a: 'A new learner completing an FPJ course enrollment using your code (non-duplicate).' },
  { q: 'Is there any cost to join?', a: 'No fees, quotas or hidden costs. You advance purely on verified performance.' },
  { q: 'Approval time?', a: 'Most applications are reviewed within 24–48 hours.' }
];
