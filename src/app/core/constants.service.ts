import { InjectionToken } from '@angular/core';

export const appInfo = { App: 'TaskManager', Ver: '1.0' };

export const ConstantsService = new InjectionToken<string[]>(
  'ConstantsService'
);
