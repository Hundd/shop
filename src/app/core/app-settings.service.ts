import { ConfigOptionsService } from './config-options.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

const key = 'settings';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  constructor(
    private storage: LocalStorageService,
    private http: HttpClient,
    private configOptionsService: ConfigOptionsService
  ) {}

  init() {
    const settings = this.storage.getItem(key);

    if (!settings) {
      this.http.get('/assets/settings.json').subscribe(
        settings => {
          this.storage.setItem(key, JSON.stringify(settings, undefined, 2));
        },

        () => {
          const defaultSettings = this.configOptionsService.loadConfig();

          this.storage.setItem(
            key,
            JSON.stringify(defaultSettings, undefined, 2)
          );
        }
      );
    }
  }
}
