import { Component, OnInit, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ToastService } from '../../core/services/toast.service';
import { DESIGN_MAP } from '../../core/constants/designs';
import { DesignId, DesignMeta, PortfolioData } from '../../core/models';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.scss'],
})
export class PortfolioFormComponent implements OnInit {
  private fb           = inject(FormBuilder);
  private portfolioSvc = inject(PortfolioService);
  private toast        = inject(ToastService);
  private route        = inject(ActivatedRoute);
  router               = inject(Router);

  form!: FormGroup;
  design: DesignMeta | null = null;
  saving   = signal(false);
  techSkills: string[] = [];
  softSkills: string[] = [];

  get educationFA():  FormArray { return this.form.get('education')  as FormArray; }
  get experienceFA(): FormArray { return this.form.get('experience') as FormArray; }
  get projectsFA():   FormArray { return this.form.get('projects')   as FormArray; }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('designId') as DesignId;
    this.design = DESIGN_MAP.get(id) ?? this.portfolioSvc.selectedDesign();
    if (!this.design) { this.router.navigate(['/dashboard']); return; }
    this.buildForm();
    this.prefillDemo();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      name:     ['', Validators.required],
      role:     ['', Validators.required],
      email:    ['', Validators.email],
      phone:    [''],
      location: [''],
      linkedin: [''],
      bio:      [''],
      github:   [''],
      website:  [''],
      certs:    [''],
      langs:    [''],
      education:  this.fb.array([]),
      experience: this.fb.array([]),
      projects:   this.fb.array([]),
    });
  }

  private prefillDemo(): void {
    const d = this.portfolioSvc.demoData();
    this.form.patchValue(d);
    this.techSkills = [...d.techSkills];
    this.softSkills = [...d.softSkills];
    d.education.forEach((e)  => this.educationFA.push(this.fb.group(e)));
    d.experience.forEach((e) => this.experienceFA.push(this.fb.group(e)));
    d.projects.forEach((p)   => this.projectsFA.push(this.fb.group(p)));
  }

  addSkill(type: 'tech' | 'soft', input: HTMLInputElement): void {
    const val = input.value.trim();
    if (!val) return;
    if (type === 'tech' && !this.techSkills.includes(val)) this.techSkills = [...this.techSkills, val];
    if (type === 'soft' && !this.softSkills.includes(val)) this.softSkills = [...this.softSkills, val];
    input.value = '';
  }

  removeSkill(type: 'tech' | 'soft', i: number): void {
    if (type === 'tech') this.techSkills = this.techSkills.filter((_, idx) => idx !== i);
    else                 this.softSkills = this.softSkills.filter((_, idx) => idx !== i);
  }

  addEdu():  void { this.educationFA.push(this.fb.group({ degree: '', school: '', year: '', grade: '' })); }
  addExp():  void { this.experienceFA.push(this.fb.group({ title: '', company: '', duration: '', desc: '' })); }
  addProj(): void { this.projectsFA.push(this.fb.group({ name: '', desc: '', tech: '', link: '' })); }

  onSubmit(): void {
    if (!this.form.get('name')?.value?.trim()) { this.toast.error('Full name is required.'); return; }
    const data: PortfolioData = { ...this.form.value, techSkills: this.techSkills, softSkills: this.softSkills };
    this.portfolioSvc.setFormData(data);
    const id = this.design?.id;
    this.saving.set(true);
    this.portfolioSvc.save(data).subscribe({
      next: () => { this.toast.success('Portfolio saved!'); this.router.navigate(['/preview', id]); this.saving.set(false); },
      error: (err) => { this.toast.error(err.error?.message ?? 'Save failed.'); this.saving.set(false); },
    });
  }
}
