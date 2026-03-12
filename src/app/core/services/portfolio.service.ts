import { Injectable, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { environment } from "../../../environments/environment";
import { ApiResponse, DesignId, DesignMeta, Portfolio, PortfolioData } from "../models";
import { DESIGN_MAP } from "../constants/designs";

@Injectable({ providedIn: "root" })
export class PortfolioService {
  private http   = inject(HttpClient);
  private router = inject(Router);
  private api    = environment.apiUrl;

  private _selectedDesign = signal<DesignMeta | null>(null);
  private _formData       = signal<PortfolioData | null>(null);
  private _saved          = signal<Portfolio | null>(null);

  readonly selectedDesign = this._selectedDesign.asReadonly();
  readonly formData       = this._formData.asReadonly();
  readonly saved          = this._saved.asReadonly();

  /** Select a design and navigate to the form */
  selectDesign(id: DesignId): void {
    const design = DESIGN_MAP.get(id);
    if (!design) return;
    this._selectedDesign.set(design);
    this.router.navigate(["/build", id]);
  }

  setFormData(data: PortfolioData): void {
    this._formData.set(data);
  }

  /** Demo data so user can test immediately */
  demoData(): PortfolioData {
    return {
      name: "Arjun Sharma", role: "Full Stack MEAN Developer",
      email: "arjun@example.com", phone: "+91 98765 43210",
      location: "Hyderabad, India", linkedin: "linkedin.com/in/arjunsharma",
      bio: "5+ years building scalable MEAN stack apps. Open-source contributor and tech blogger.",
      techSkills: ["Angular","Node.js","MongoDB","Express.js","TypeScript","Docker","AWS","Redis","GraphQL","RxJS"],
      softSkills: ["Leadership","Problem Solving","Agile/Scrum","Team Collaboration","Communication"],
      education: [
        { degree: "B.Tech – Computer Science", school: "JNTU Hyderabad", year: "2016–2020", grade: "8.7 CGPA" },
      ],
      experience: [
        { title: "Senior Full Stack Developer", company: "TechVision Solutions", duration: "Jan 2022 – Present",
          desc: "Led a team of 6 engineers delivering a real-time logistics platform serving 500K+ users." },
        { title: "Full Stack Developer", company: "InnoSoft Technologies", duration: "Jun 2020 – Dec 2021",
          desc: "Built 12+ REST APIs and 3 Angular SPAs for fintech clients." },
      ],
      projects: [
        { name: "PortfolioForge",  desc: "SaaS platform for professional portfolios.", tech: "Angular, Node.js, MongoDB, AWS", link: "portfolioforge.app" },
        { name: "LogiTrack Pro",   desc: "Real-time fleet management with WebSocket tracking.", tech: "Angular, Node.js, Socket.io, Redis", link: "logitrack.io" },
      ],
      github: "github.com/arjunsharma", website: "arjunsharma.dev",
      certs: "AWS Certified Developer – Associate\nGoogle Cloud Professional Data Engineer",
      langs: "English (Fluent), Telugu (Native), Hindi (Conversational)",
    };
  }

  save(data: PortfolioData): Observable<ApiResponse<Portfolio>> {
    const d = this._selectedDesign();
    if (!d) throw new Error("No design selected");
    return this.http.post<ApiResponse<Portfolio>>(`${this.api}/portfolio`, {
      ...data, designId: d.id, tier: d.tier, designName: d.name,
    }).pipe(tap((r) => { if (r.data) this._saved.set(r.data); }));
  }

  getPublic(slug: string): Observable<ApiResponse<Portfolio>> {
    return this.http.get<ApiResponse<Portfolio>>(`${this.api}/portfolio/u/${slug}`);
  }

  getMine(): Observable<ApiResponse<Portfolio>> {
    return this.http.get<ApiResponse<Portfolio>>(`${this.api}/portfolio/me`).pipe(
      tap((r) => { if (r.data) this._saved.set(r.data); })
    );
  }
}
