import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioR2Component } from './portfolio-r2-morph.component';

@NgModule({
  declarations: [PortfolioR2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PortfolioR2Component }]),
  ],
})
export class PortfolioR2Module {}
