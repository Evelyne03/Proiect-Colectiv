import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Team } from './team';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private _currentTeam = new BehaviorSubject<Team>({} as any);
  readonly currentTeam = this._currentTeam.asObservable();

  private url = 'http://localhost:8080'; // Change to your API url
  constructor(private http: HttpClient, private router: Router) {}

  getTeamMembers(teamid:number):Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/teams/${teamid}/users`);
  }
}