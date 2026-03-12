import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DesignCardComponent } from './components/design-card/design-card.component';
import { DesignGridComponent } from './components/design-grid/design-grid.component';

@NgModule({
  declarations: [DashboardComponent, DesignCardComponent, DesignGridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
  ],
})
export class DashboardModule {}
