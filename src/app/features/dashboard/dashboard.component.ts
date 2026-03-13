import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { PortfolioService } from '../../core/services/portfolio.service';
import { OPEN_DESIGNS, PLUS_DESIGNS, PRO_DESIGNS } from '../../core/constants/designs';
import { DesignId, UserPlan } from '../../core/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  private auth         = inject(AuthService);
  private portfolioSvc = inject(PortfolioService);
  private router       = inject(Router);

  openDesigns = OPEN_DESIGNS;
  plusDesigns = PLUS_DESIGNS;
  proDesigns  = PRO_DESIGNS;

  get plan(): UserPlan { return this.auth.userPlan(); }
  get userName(): string { return this.auth.userName(); }

  onDesignSelect(designId: DesignId): void {
    const tierRank: Record<UserPlan, number> = { open: 0, plus: 1, pro: 2 };
    const design = [...OPEN_DESIGNS, ...PLUS_DESIGNS, ...PRO_DESIGNS].find((d) => d.id === designId)!;

    // if (tierRank[this.plan] < tierRank[design.tier]) {
    //   this.router.navigate(['/subscription'], { queryParams: { required: design.tier } });
    //   return;
    // }
    this.portfolioSvc.selectDesign(designId);
  }
}
