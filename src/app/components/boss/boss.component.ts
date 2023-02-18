import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Boss } from 'src/app/models/boss.model';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.css']
})
export class BossComponent {

  @Input() boss!: Boss;
  @Input() factor: number = 1;

  @Output() toggle = new EventEmitter<Boss>();


  isDefeated = false;


  x(boss: Boss): number {
    switch (boss) {
      case 'Cutman':  return  24 * this.factor;
      case 'Iceman':  return 104 * this.factor;
      case 'Elecman': return  24 * this.factor;
      case 'Fireman': return 104 * this.factor;
    }
  }


  y(boss: Boss): number {
    switch (boss) {
      case 'Cutman':  return 16 * this.factor;
      case 'Iceman':  return 16 * this.factor;
      case 'Elecman': return 96 * this.factor;
      case 'Fireman': return 96 * this.factor;
    }
  }


  get name(): string {
    return this.isDefeated ? `Defeated ${this.boss}` : this.boss;
  }


  onToggle(): void {
    this.toggle.emit(this.boss);
    this.isDefeated = !this.isDefeated;
  }

}
