import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioP5Component } from './portfolio-p5-deepflow.component';

@NgModule({
  declarations: [PortfolioP5Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PortfolioP5Component }]),
  ],
})
export class PortfolioP5Module {}
