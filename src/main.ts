import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PersonListComponent } from './app/person-list/person-list.component';
import { provideRouter, Routes, RouterOutlet } from '@angular/router';
import { PersonComponent } from './app/person/person.component';
import { HomeComponent } from './app/home/home.component';

@Component({
  selector: 'app-root',
  // template: `
  //   <h1>Hello from {{ name }}!</h1>
  //   <a target="_blank" href="https://angular.dev/overview">
  //     Learn more about Angular
  //   </a>
  // `,
  templateUrl: './app/app.component.html',
  imports: [RouterOutlet, PersonListComponent],
})
export class App {
  name = 'Angular';
}
const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'person/:id', component: PersonComponent },
];
bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
