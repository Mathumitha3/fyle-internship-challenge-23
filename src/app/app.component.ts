// import { Component, OnInit } from '@angular/core';
// import { ApiService } from './services/api.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit{
//   constructor(
//     private apiService: ApiService
//   ) {}

//   ngOnInit() {
//     this.apiService.getUser('johnpapa').subscribe(console.log);
//   }
// }
// github.service.ts

// src/app/app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-user-search> </app-user-search>
    <app-repo-list [repos]="repos"></app-repo-list>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  repos: any[] = [];

  updateRepos(repos: any[]): void {
    this.repos = repos;
  }
}
