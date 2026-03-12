import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioO3Component } from './portfolio-o3-blocks.component';

@NgModule({
  declarations: [PortfolioO3Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PortfolioO3Component }]),
  ],
})
export class PortfolioO3Module {}
