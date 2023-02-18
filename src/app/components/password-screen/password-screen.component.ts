import { Component, Input } from '@angular/core';
import { Coordinate } from 'src/app/models/coordinate.model';
import { Password } from 'src/app/models/password.model';

@Component({
  selector: 'app-password-screen',
  templateUrl: './password-screen.component.html',
  styleUrls: ['./password-screen.component.css']
})
export class PasswordScreenComponent {

  @Input() password!: Password | undefined;
  @Input() factor: number = 1;


  get xDmgScreenResolution(): number { return 160 * this.factor; }
  get yDmgScreenResolution(): number { return 144 * this.factor; }
  get xGridOffset():          number { return  37 * this.factor; }
  get yGridOffset():          number { return  45 * this.factor; }
  get bulletDiameter():       number { return   8 * this.factor; }
  get bulletSeparation():     number { return  16 * this.factor; }


  x(coordinate: Coordinate): number {
    const offset = 1;
    const letteCode = +coordinate.split('')[1];
    const x = (letteCode - offset);
    return this.bulletSeparation * x + this.xGridOffset;
  }


  y(coordinate: Coordinate): number {
    const letterOffset = 'A'.charCodeAt(0);
    const letteCode = coordinate.split('')[0].charCodeAt(0);
    const y = (letteCode - letterOffset);
    return this.bulletSeparation * y + this.yGridOffset;
  }

}
