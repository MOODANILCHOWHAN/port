import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { PortfolioData } from '../../../../core/models';

@Component({
  selector: 'app-portfolio-p3-glass',
  templateUrl: './portfolio-p3-glass.component.html',
  styleUrls: ['./portfolio-p3-glass.component.scss'],
})
export class PortfolioP3Component implements OnInit {
  private svc = inject(PortfolioService);
  router      = inject(Router);
  data!: PortfolioData;

  ngOnInit(): void {
    const d = this.svc.formData() as PortfolioData | null;
    if (!d) { this.router.navigate(['/dashboard']); return; }
    this.data = d;
  }

  splitTech(t: string): string[] { return (t || '').split(',').map(s => s.trim()).filter(Boolean); }
  splitLines(t: string): string[] { return (t || '').split('\n').filter(Boolean); }
}
