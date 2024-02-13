// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { tap, throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor(
//     private httpClient: HttpClient
//   ) { }

//   getUser(githubUsername: string) {
//     return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
//   }

//   // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUserRepos(username: string): Observable<any[]> {
    const url = `${this.apiUrl}/users/${username}/repos`;
    return this.http.get<any[]>(url);
  }
}
