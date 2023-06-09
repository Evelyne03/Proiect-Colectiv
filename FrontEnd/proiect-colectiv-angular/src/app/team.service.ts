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

  getTeamUsers(teamId:number):Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/teams/${teamId}/users`);
  }

  removeUserFromTeam(userId: number) {
    return this.http.put(`${this.url}/teams/removeUser`, {"userId": userId});
  }

  addUserToTeam(id: number | undefined, userEmail: String | undefined) {
    return this.http.patch(`${this.url}/teams/${id}/addUser`, {userEmail: userEmail});
  }

  getTeamMembers(teamid:number):Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/teams/${teamid}/members`);
  }

  getAllAvailableMembers() {
    return this.http.get<User[]>(`${this.url}/teams/availableMembers`);
  }

  getTeam(teamid:number):Observable<Team> {
    return this.http.get<Team>(`${this.url}/teams/${teamid}`);
  }

  getAllTeams() {
    return this.http.get<Team[]>(`${this.url}/teams/getAll`);
  }

  getAllTeamsNoMentor(){
    return this.http.get<Team[]>(`${this.url}/teams/getAllNoMentor`);
  }

  setMentor(teamId: number, userId: number) {
    return this.http.patch(`${this.url}/teams/${teamId}/addMentor`, {userId: userId});
  }
  updateTeamName(teamId:number, name:string):Observable<Team> {
    return this.http.patch<Team>(`${this.url}/teams/${teamId}/updateTeamName`, {"name": name});
  }

  addActivityToTeam(team_id: number, id: number) {
    return this.http.patch(`${this.url}/teams/${team_id}/addActivity`, {"activityId": id});
  }

}
