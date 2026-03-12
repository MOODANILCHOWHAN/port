import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioR1Component } from './portfolio-r1-particle.component';

@NgModule({
  declarations: [PortfolioR1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PortfolioR1Component }]),
  ],
})
export class PortfolioR1Module {}
