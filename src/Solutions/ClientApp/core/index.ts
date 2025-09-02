import { NavItem } from 'rosie-ui';

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
  navId: 'misc',
  navName: 'Misc',
  children: [{
    navId: 'chat',
    navName: 'Chat',
    navPath: '/chat',
  }]
}]

export function generateRequestId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0,
          v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}