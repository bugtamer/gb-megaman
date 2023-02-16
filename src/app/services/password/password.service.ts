import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';
import { Password } from 'src/app/models/password.model';
import { Boss, haveSameBosses } from 'src/app/models/boss.model';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private passwords$ = new BehaviorSubject<Password[]>([]);

  constructor(private http: HttpClient) { }


  getPassword(defeatedBosses: Array<Boss>): Observable<Password | undefined> {
    if (this.passwords$.value.length > 0) {
      return this.find(this.passwords$.asObservable(), defeatedBosses);
    }
    const url = 'assets/data/gb-megaman-passwords.json';
    return this.find(this.http.get<Password[]>(url).pipe(tap(pwds => this.passwords$.next(pwds))), defeatedBosses);
  }


  private find(list: Observable<Password[]>, defeatedBosses: Array<Boss>): Observable<Password | undefined> {
    return list.pipe(
      map<Password[], Password | undefined>(passwordList => passwordList.find(
        password => haveSameBosses(defeatedBosses, password.defeated)
      )
    ));
  }

}
