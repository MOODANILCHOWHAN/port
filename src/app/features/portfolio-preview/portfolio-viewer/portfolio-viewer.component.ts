import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { Portfolio } from '../../../core/models';

@Component({
  selector: 'app-portfolio-viewer',
  template: `
    <div class="viewer">
      <div *ngIf="loading()" class="loading">Loading portfolio…</div>
      <div *ngIf="error()"   class="error">{{ error() }}</div>
      <div *ngIf="portfolio()" class="loaded">
        <p>Portfolio found: <strong>{{ portfolio()?.name }}</strong> — {{ portfolio()?.designName }}</p>
        <p>Share link portfolios render the full design server-side. Coming soon.</p>
      </div>
    </div>
  `,
  styles: [`.viewer{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0a0a0f;color:#e8e8f0;font-family:"DM Sans",sans-serif;text-align:center;padding:40px;}.loading,.error,.loaded{max-width:500px;} .error{color:#ff6b6b;}`],
})
export class PortfolioViewerComponent implements OnInit {
  private route        = inject(ActivatedRoute);
  private portfolioSvc = inject(PortfolioService);
  private router       = inject(Router);

  loading   = signal(true);
  error     = signal('');
  portfolio = signal<Portfolio | null>(null);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.portfolioSvc.getPublic(slug).subscribe({
      next: (r) => { this.portfolio.set(r.data ?? null); this.loading.set(false); },
      error: ()  => { this.error.set('Portfolio not found.'); this.loading.set(false); },
    });
  }
}
