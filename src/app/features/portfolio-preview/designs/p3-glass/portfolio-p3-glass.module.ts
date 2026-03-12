import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioP3Component } from './portfolio-p3-glass.component';

@NgModule({
  declarations: [PortfolioP3Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PortfolioP3Component }]),
  ],
})
export class PortfolioP3Module {}
