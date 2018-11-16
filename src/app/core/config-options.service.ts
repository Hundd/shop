import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

const CONFIG_KEY = 'config';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  constructor(private localStorageService: LocalStorageService) {}

  saveConfig(config: Object) {
    this.localStorageService.setItem(CONFIG_KEY, JSON.stringify(config));
  }

  loadConfig(): Object {
    return JSON.parse(this.localStorageService.getItem(CONFIG_KEY));
  }
}
