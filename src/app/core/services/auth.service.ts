import { Injectable, computed, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse, LoginPayload, RegisterPayload, User, UserPlan } from '../models';

const TOKEN_KEY  = 'pf_token';
const USER_KEY   = 'pf_user';
const TIER_RANK: Record<UserPlan, number> = { open: 0, plus: 1, pro: 2 };

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http       = inject(HttpClient);
  private router     = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private api        = environment.apiUrl;
  private isBrowser  = isPlatformBrowser(this.platformId);

  // Load user safely - only access localStorage in browser context
  private _user = signal<User | null>(this.isBrowser ? this.loadUserFromStorage() : null);

  readonly user       = this._user.asReadonly();
  readonly isLoggedIn = computed(() => !!this._user());
  readonly userPlan   = computed(() => this._user()?.plan ?? 'open');
  readonly userName   = computed(() => this._user()?.name ?? '');
  readonly initial    = computed(() => (this._user()?.name?.[0] ?? 'U').toUpperCase());

  getToken(): string | null {
    return this.isBrowser ? localStorage.getItem(TOKEN_KEY) : null;
  }

  private loadUserFromStorage(): User | null {
    try {
      return JSON.parse(localStorage.getItem(USER_KEY) ?? 'null');
    } catch {
      return null;
    }
  }

  private persist(token: string, user: User): void {
    if (this.isBrowser) {
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    this._user.set(user);
  }

  login(payload: LoginPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.api}/auth/login`, payload).pipe(
      tap((r) => { this.persist(r.token, r.user); this.router.navigate(['/dashboard']); })
    );
  }

  register(payload: RegisterPayload): Observable<AuthResponse> {
    console.log(`${this.api}/auth/register`)
    return this.http.post<AuthResponse>(`${this.api}/auth/register`, payload).pipe(
      tap((r) => { this.persist(r.token, r.user); this.router.navigate(['/dashboard']); })
    );
  }

  refreshMe(): void {
    if (!this.getToken()) return;
    this.http.get<{ success: boolean; data: User }>(`${this.api}/auth/me`).subscribe({
      next: (r) => {
        this._user.set(r.data);
        if (this.isBrowser) localStorage.setItem(USER_KEY, JSON.stringify(r.data));
      },
      error: () => this.logout(),
    });
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
    this._user.set(null);
    this.router.navigate(['/login']);
  }

  hasAccess(tier: UserPlan): boolean {
    return TIER_RANK[this.userPlan()] >= TIER_RANK[tier];
  }
}
