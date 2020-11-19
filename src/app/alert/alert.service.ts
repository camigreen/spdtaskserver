import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlertService {
  alerts: any[] = [];

  show(textOrTpl: string, options: any = {}) {
    this.alerts.push({ textOrTpl, ...options });
  }

  remove(alert) {
    this.alerts = this.alerts.filter(t => t !== alert);
  }

}