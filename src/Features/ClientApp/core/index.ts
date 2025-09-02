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
  navId: 'chat',
  navName: 'Chat',
  navPath: '/chat'
}, {
  navId: 'kyc',
  navName: 'KYC',
  children: [{
    navId: 'audit-logs',
    navName: 'Audit Logs',
    navPath: '/kyc/audit-logs'
  }]
}]