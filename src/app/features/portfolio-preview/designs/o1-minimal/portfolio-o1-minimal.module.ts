import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioO1Component } from './portfolio-o1-minimal.component';

@NgModule({
  declarations: [PortfolioO1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PortfolioO1Component }]),
  ],
})
export class PortfolioO1Module {}
