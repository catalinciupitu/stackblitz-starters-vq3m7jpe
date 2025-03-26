import { Injectable } from '@angular/core';
import { Person } from '../person/person';
import { delay, filter, map, Observable, of } from 'rxjs';
import { Users } from './../users';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  private simulateDelay(ms: number = 500): number {
    return ms + Math.floor(Math.random() * 500);
  }

  getAll(): Observable<Person[]> {
    return of(Users).pipe(delay(this.simulateDelay()));
  }

  getById(id: number): Observable<Person | undefined> {
    let user: Observable<Person | undefined> =  of(Users).pipe(
      map(users => users.find(user => user.id == id))
    );
    return user;
  }
}
