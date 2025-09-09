import { CriteriaField } from 'rosie-ui';
import { NavItem } from 'venus/core';

export type Message = {
  type: string,
  content: string,
  sessionId: string,
}

export type Ocr = {
  ssn: string,
  name: string,
  dob: string,
  gender: string,
  address: string,
  givenDate: string,
  givenPlace: string,
  dueDate: string,
}

export type FaceMatching = {
  matched: boolean,
  confidence: number,
}

export type AuditLog = {
  requestId: string,
  requestDate: string,
  front: string,
  back: string,
  selfie: string,
  ocr: Ocr,
  faceMatching: FaceMatching,
}

export const navigator: NavItem[] = [{
  navId: 'ua',
  navName: 'User Acquisition',
  children: [{
    navId: 'audiences',
    navName: 'Audiences',
    navPath: '/ua/audiences'
  }]
}, {
  navId: 'ai',
  navName: 'AI Features',
  children: [{
    navId: 'fraud',
    navName: 'Fraud Detection',
    navPath: '/ai/fraud'
  }, {
    navId: 'churn',
    navName: 'Churn Detection',
    navPath: '/ai/churn'
  }]
}, {
  navId: 'kyc',
  navName: 'KYC',
  children: [{
    navId: 'auto-approval',
    navName: 'Auto Approval',
    navPath: '/kyc/auto-approval'
  }, {
    navId: 'audit-logs',
    navName: 'Audit Logs',
    navPath: '/kyc/audit-logs'
  }]
}, {
  navId: 'marketing-plans',
  navName: 'Masterting Plans',
  children: [{
    navId: 'financial-projections',
    navName: 'Financial Projections',
    navPath: '/financial-projections',
  }]
}, {
  navId: 'misc',
  navName: 'Misc',
  children: [{
    navId: 'chat',
    navName: 'Chat',
    navPath: '/chat',
  }, {
    navId: 'financial-projection',
    navName: 'Financial Projection',
    navPath: '/financial-projection/1',
  }, {
    navId: 'talent-profile',
    navName: 'Talent Profile',
    navPath: '/talent-profile/1',
  }, {
    navId: 'data-contract',
    navName: 'Data Contract',
    navPath: '/data-contract/1',
  }]
}]

export const  ruleCriteria: CriteriaField[] = [];

export function generateRequestId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0,
          v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}