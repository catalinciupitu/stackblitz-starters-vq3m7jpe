import { Component, OnInit } from '@angular/core';
import { PersonService } from '../service/person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit {

  constructor(private dataService: PersonService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = +(this.route.snapshot.queryParamMap.get("id") || 0);
  
    this.dataService.getById(id).subscribe();
  }



}
