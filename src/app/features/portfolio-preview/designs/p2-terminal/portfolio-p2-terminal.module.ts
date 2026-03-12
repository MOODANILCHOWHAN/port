import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioP2Component } from './portfolio-p2-terminal.component';

@NgModule({
  declarations: [PortfolioP2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PortfolioP2Component }]),
  ],
})
export class PortfolioP2Module {}
