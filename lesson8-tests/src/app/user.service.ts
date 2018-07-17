import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getOne(id: number) {
    return this._http.get(`/users/${id}`);
  }

  getAll(id: number) {
    return this._http.get(`/users`);
  }
}
