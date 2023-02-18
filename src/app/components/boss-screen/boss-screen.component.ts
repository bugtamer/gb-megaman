import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Boss } from 'src/app/models/boss.model';

@Component({
  selector: 'app-boss-screen',
  templateUrl: './boss-screen.component.html',
  styleUrls: ['./boss-screen.component.css']
})
export class BossScreenComponent {

  @Input() factor: number = 1;
  @Output() defeated = new EventEmitter<Boss[]>();


  private defeatedBosses: Array<Boss> = [];


  async toggleBoss(boss: Boss): Promise<void> {
    console.debug({boss})
    const bossIndex = this.defeatedBosses.findIndex(b => b === boss);
    const notFound = -1;
    if (bossIndex === notFound) {
      this.defeatedBosses.push(boss);
    } else {
      const deleteCount = 1;
      this.defeatedBosses.splice(bossIndex, deleteCount);
    }
    this.defeated.emit(this.defeatedBosses);
  }


  get isWilyAvailable(): boolean {
    return this.defeatedBosses.length === 4;
  }

}
