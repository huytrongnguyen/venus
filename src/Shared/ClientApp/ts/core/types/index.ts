import { AxiosError, Method } from 'axios';

export interface Dictionary<T> {
  [index: string]: T;
}

export type NavItem = {
  navId: string,
  navName: string,
  navIcon?: string,
  navPath?: string,
  children?: NavItem[],
}

// export type HttpMethod = Method;

// export interface AjaxError extends AxiosError<any> { }

// export type HttpParams = {
//   pathParams?: Dictionary<any>,
//   queryParams?: Dictionary<any>,
//   body?: any,
//   headers?: Dictionary<any>,
// }

// export type AjaxSettings = {
//   url: string,
//   method?: HttpMethod,
//   params?: HttpParams,
// }