import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioViewerComponent } from './portfolio-viewer.component';

@NgModule({
  declarations: [PortfolioViewerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PortfolioViewerComponent }]),
  ],
})
export class PortfolioViewerModule {}
