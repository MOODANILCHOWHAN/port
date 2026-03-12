import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PortfolioFormComponent } from './portfolio-form.component';

@NgModule({
  declarations: [PortfolioFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: PortfolioFormComponent }]),
  ],
})
export class PortfolioFormModule {}
