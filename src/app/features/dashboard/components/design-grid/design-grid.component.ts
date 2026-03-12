import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DesignMeta, DesignId, UserPlan } from '../../../../core/models';

@Component({
  selector: 'app-design-grid',
  templateUrl: './design-grid.component.html',
  styleUrls: ['./design-grid.component.scss'],
})
export class DesignGridComponent {
  @Input({ required: true }) designs: DesignMeta[] = [];
  @Input() userPlan: UserPlan = 'open';
  @Output() designSelected = new EventEmitter<DesignId>();

  track = (_: number, d: DesignMeta) => d.id;

  onSelect(design: DesignMeta): void {
    this.designSelected.emit(design.id as DesignId);
  }
}
