import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioR3Component } from './portfolio-r3-typewriter.component';

@NgModule({
  declarations: [PortfolioR3Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PortfolioR3Component }]),
  ],
})
export class PortfolioR3Module {}
