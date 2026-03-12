import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubscriptionComponent } from './subscription.component';

@NgModule({
  declarations: [SubscriptionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SubscriptionComponent }]),
  ],
})
export class SubscriptionModule {}
