import { Component, inject } from '@angular/core';
import { ToastService, Toast } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  svc = inject(ToastService);

  track = (_: number, t: Toast) => t.id;
}
