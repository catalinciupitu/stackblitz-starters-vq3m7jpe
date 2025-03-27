import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Users } from './../users';
import { of, map } from 'rxjs';
import { UsersStoreService } from '../service/users-store.service';

@Component({
  selector: 'app-person-list',
  imports: [NgFor, RouterModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css',
})
export class PersonListComponent implements OnInit {

  public users = this.userStore.users;

  constructor(
    private router: Router, 
    private userStore: UsersStoreService
  ) {
    this.userStore.loadUsers();
  }

  ngOnInit(): void {
    //this.userStore.loadUsers();
  }
 

  fibonnaci(n: number): number {
    if (n < 2) {
      return n;
    }

    return this.fibonnaci(n - 1) + this.fibonnaci(n - 2);
  }


}
