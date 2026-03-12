import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioO2Component } from './portfolio-o2-sidebar.component';

@NgModule({
  declarations: [PortfolioO2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PortfolioO2Component }]),
  ],
})
export class PortfolioO2Module {}
