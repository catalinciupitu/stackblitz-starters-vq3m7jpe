import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Users } from './../users';
import { of, map } from 'rxjs';

@Component({
  selector: 'app-person-list',
  imports: [NgFor, RouterModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css',
})
export class PersonListComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
      //this.router.navigate(['person/', 1]);
      of(Users)                  // → emits values
  .pipe(
    map(x: Person => x.id / 10)              // → modifies each value
  )
  .subscribe(result => console.log(result));


  }
  users = Users;

  fibonnaci(n: number): number {
    if (n < 2) {
      return n;
    }

    return this.fibonnaci(n - 1) + this.fibonnaci(n - 2);
  }


}
