import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { PortfolioData } from '../../../../core/models';

@Component({
  selector: 'app-portfolio-r1-particle',
  templateUrl: './portfolio-r1-particle.component.html',
  styleUrls: ['./portfolio-r1-particle.component.scss'],
})
export class PortfolioR1Component implements OnInit {
  private svc = inject(PortfolioService);
  router      = inject(Router);
  data!: PortfolioData;

  particles = Array.from({ length: 30 }, () => ({
    left:  Math.random() * 100,
    top:   Math.random() * 100,
    delay: Math.random() * 8,
    dur:   6 + Math.random() * 4,
  }));

  ngOnInit(): void {
    const d = this.svc.formData() as PortfolioData | null;
    if (!d) { this.router.navigate(['/dashboard']); return; }
    this.data = d;
  }

  splitTech(t: string): string[] { return (t || '').split(',').map(s => s.trim()).filter(Boolean); }
  splitLines(t: string): string[] { return (t || '').split('\n').filter(Boolean); }

  getStyle(p: { left: number; top: number; delay: number; dur: number }): string {
    return `left:${p.left}%;top:${p.top}%;animation-delay:${p.delay}s;animation-duration:${p.dur}s`;
  }
}
