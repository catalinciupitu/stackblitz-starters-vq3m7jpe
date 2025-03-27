import { Injectable, computed, signal } from '@angular/core';
import { Person } from '../person/person';
import { PersonService } from './person.service';

@Injectable({
  providedIn: 'root'
})
export class UsersStoreService {

  private _users = signal<Person[]>([]);
  private user = signal<Person | null>(null);
  public users = computed(() => this._users());

  constructor(private dataService: PersonService) {
    
   }

  loadUsers() {
    this.dataService.getAll().subscribe(
      data => this._users.set(data)
    );
  }

  loadById(id: number) {
    this.dataService.getById(id).subscribe(
      data => this.user.set(data || null)
    );
  }
}
