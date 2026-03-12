import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DesignMeta, UserPlan } from '../../../../core/models';

@Component({
  selector: 'app-design-card',
  templateUrl: './design-card.component.html',
  styleUrls: ['./design-card.component.scss'],
})
export class DesignCardComponent {
  @Input({ required: true }) design!: DesignMeta;
  @Input() userPlan: UserPlan = 'open';
  @Output() selected = new EventEmitter<DesignMeta>();

  get hasAccess(): boolean {
    const r: Record<UserPlan, number> = { open: 0, plus: 1, pro: 2 };
    return r[this.userPlan] >= r[this.design.tier];
  }
  onUse(): void { this.selected.emit(this.design); }
}
