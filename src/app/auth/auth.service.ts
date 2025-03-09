import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';  // URL for the users in db.json

  constructor(private http: HttpClient) {}

  // Register user (can be used if you want to add new users to the db.json)
  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // Login user by checking credentials in db.json
  login(user: any): Observable<any> {
    const params = new HttpParams()
      .set('email', user.email)
      .set('password', user.password);

    return this.http.get(this.apiUrl, { params });
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token;
  }
}
