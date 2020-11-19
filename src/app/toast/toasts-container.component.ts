import {Component} from '@angular/core';

import {ToastService} from './toast.service';


@Component({
  selector: 'app-toasts',
  templateUrl: './toast.container.html'
})
export class ToastsContainer {
  constructor(public toastService: ToastService) {}

  isTemplate(toast) { return toast.textOrTpl; }
}