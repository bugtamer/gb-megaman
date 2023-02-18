import { Component, OnInit } from '@angular/core';
import { Boss } from './models/boss.model';
import { Password } from './models/password.model';
import { PasswordService } from './services/password/password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  password!: Password | undefined;
  defeatedBosses: Array<Boss> = [];
  factor: number = 2;


  constructor(private passwordService: PasswordService) {
  }
  
  
  async ngOnInit(): Promise<void> {
    await this.computePassword();
  }


  async toggleBoss(boss: Boss): Promise<void> {
    const bossIndex = this.defeatedBosses.findIndex(b => b === boss);
    const notFound = -1;
    if (bossIndex === notFound) {
      this.defeatedBosses.push(boss);
    } else {
      const deleteCount = 1;
      this.defeatedBosses.splice(bossIndex, deleteCount);
    }
    await this.computePassword();
  }


  async setDefeatedBosses(defeatedBosses: Array<Boss>): Promise<void> {
    this.defeatedBosses = defeatedBosses;
    await this.computePassword();
  }


  async computePassword(): Promise<void> {
    this.password = await this.passwordService.getPassword(this.defeatedBosses).toPromise();
  }


  get coordinates(): string {
    return !!this.password ? this.password.password.join(', ') : '';
  }


  get defeated(): string {
    return !!this.password ? this.password.defeated.join(', ') : '';
  }

}
