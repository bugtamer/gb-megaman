import { Component, OnInit } from '@angular/core';
import { Coordinate, coordinateToZeroBasedIndex } from './models/coordinate.model';
import { Password } from './models/password.model';
import { PasswordService } from './services/password/password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  password!: Password | undefined;


  constructor(private passwordService: PasswordService) {
  }
  
  
  async ngOnInit(): Promise<void> {
    this.password = await this.passwordService.getPassword([]).toPromise();
  }

  index(coordinate: Coordinate): number {
    return coordinateToZeroBasedIndex(coordinate);
  }

}
