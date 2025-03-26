import { Injectable } from '@angular/core';
import { Person } from '../person/person';
import { filter, Observable, of } from 'rxjs';
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
    return of(Users);
  }

  getById(id: number): Observable<Person> {
    let user: Person =  of(Users).pipe(
      filter(user => user.id == id)
    );
  }
}
