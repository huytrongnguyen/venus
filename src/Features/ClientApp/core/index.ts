import { NavItem } from 'rosie-ui';

export type Message = {
  type: string,
  content: string,
  sessionId: string,
}

export const navigator: NavItem[] = [{
  navId: 'features',
  navName: 'Features',
  children: [{
    navId: 'chat',
    navName: 'Chat',
    navPath: '/chat'
  }]
}]