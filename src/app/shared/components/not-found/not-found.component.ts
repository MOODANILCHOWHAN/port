import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="page">
      <div class="code">404</div>
      <p>This page doesn't exist.</p>
      <a routerLink="/dashboard">← Back to Dashboard</a>
    </div>
  `,
  styles: [`
    .page { min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0a0a0f;font-family:"DM Sans",sans-serif;text-align:center;gap:16px; }
    .code { font-family:"Bebas Neue",sans-serif;font-size:8rem;letter-spacing:4px;color:#7c5cfc; }
    p { color:#7a7a9a; }
    a { background:#7c5cfc;color:#fff;padding:12px 28px;border-radius:10px;font-weight:600; }
  `],
})
export class NotFoundComponent {}
