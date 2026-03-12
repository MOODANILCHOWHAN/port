import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent {
  router   = inject(Router);
  route    = inject(ActivatedRoute);
  required = this.route.snapshot.queryParamMap.get('required') ?? '';
}
