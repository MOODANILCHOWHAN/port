import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, noAuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'login',
    canActivate: [noAuthGuard],
    loadChildren: () => import('./features/auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    canActivate: [noAuthGuard],
    loadChildren: () => import('./features/auth/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'build/:designId',
    canActivate: [authGuard],
    loadChildren: () => import('./features/portfolio-form/portfolio-form.module').then(m => m.PortfolioFormModule),
  },
  {
    path: 'preview/O1',
    canActivate: [authGuard],
    loadChildren: () => import('./features/portfolio-preview/designs/o1-minimal/portfolio-o1-minimal.module').then(m => m.PortfolioO1Module),
  },
  {
    path: 'preview/O2',
    canActivate: [authGuard],
    loadChildren: () => import('./features/portfolio-preview/designs/o2-sidebar/portfolio-o2-sidebar.module').then(m => m.PortfolioO2Module),
  },
  {
    path: 'preview/O3',
    canActivate: [authGuard],
    loadChildren: () => import('./features/portfolio-preview/designs/o3-blocks/portfolio-o3-blocks.module').then(m => m.PortfolioO3Module),
  },
  {
    path: 'preview/P1',
    canActivate: [authGuard],
    loadChildren: () => import('./features/portfolio-preview/designs/p1-magazine/portfolio-p1-magazine.module').then(m => m.PortfolioP1Module),
  },
  {
    path: 'preview/P2',
    canActivate: [authGuard],
    loadChildren: () => import('./features/portfolio-preview/designs/p2-terminal/portfolio-p2-terminal.module').then(m => m.PortfolioP2Module),
  },
  {
    path: 'preview/P3',
    canActivate: [authGuard],
    loadChildren: () => import('./features/portfolio-preview/designs/p3-glass/portfolio-p3-glass.module').then(m => m.PortfolioP3Module),
  },
  {
    path: 'preview/P4',
    canActivate: [authGuard],
    loadChildren: () => import('./features/portfolio-preview/designs/p4-brutalist/portfolio-p4-brutalist.module').then(m => m.PortfolioP4Module),
  },
  {
    path: 'preview/P5',
    canActivate: [authGuard],
    loadChildren: () => import('./features/portfolio-preview/designs/p5-deepflow/portfolio-p5-deepflow.module').then(m => m.PortfolioP5Module),
  },
  {
    path: 'preview/R1',
    canActivate: [authGuard],
    loadChildren: () => import('./features/portfolio-preview/designs/r1-particle/portfolio-r1-particle.module').then(m => m.PortfolioR1Module),
  },
  {
    path: 'preview/R2',
    canActivate: [authGuard],
    loadChildren: () => import('./features/portfolio-preview/designs/r2-morph/portfolio-r2-morph.module').then(m => m.PortfolioR2Module),
  },
  {
    path: 'preview/R3',
    canActivate: [authGuard],
    loadChildren: () => import('./features/portfolio-preview/designs/r3-typewriter/portfolio-r3-typewriter.module').then(m => m.PortfolioR3Module),
  },
  {
    path: 'u/:slug',
    loadChildren: () => import('./features/portfolio-preview/portfolio-viewer/portfolio-viewer.module').then(m => m.PortfolioViewerModule),
  },
  {
    path: 'subscription',
    canActivate: [authGuard],
    loadChildren: () => import('./features/subscription/subscription.module').then(m => m.SubscriptionModule),
  },
  {
    path: '**',
    loadChildren: () => import('./shared/components/not-found/not-found.module').then(m => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
