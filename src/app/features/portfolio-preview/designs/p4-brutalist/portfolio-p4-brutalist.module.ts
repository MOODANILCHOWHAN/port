import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioP4Component } from './portfolio-p4-brutalist.component';

@NgModule({
  declarations: [PortfolioP4Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PortfolioP4Component }]),
  ],
})
export class PortfolioP4Module {}
