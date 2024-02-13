// src/app/user-search/user-search.component.ts

// user-search.component.ts

import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
})
export class UserSearchComponent {
  username: string = '';
  repos: any[] = [];

  constructor(private githubService: GithubService) {}

  searchUser(): void {
    this.githubService.getUserRepos(this.username).subscribe((repos) => {
      this.repos = repos;
    });
  }
}
