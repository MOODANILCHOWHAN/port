import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioP1Component } from './portfolio-p1-magazine.component';

@NgModule({
  declarations: [PortfolioP1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PortfolioP1Component }]),
  ],
})
export class PortfolioP1Module {}
