export * from './shared';
export * from './http';
export * from './user';

export type NavItem = {
  navId: string,
  navName: string,
  navIcon?: string,
  navPath?: string,
  children?: NavItem[],
  activeFn?: (path: string) => boolean,
}