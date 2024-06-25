import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private url = 'http://localhost:3000/data';

  constructor(private httpClient: HttpClient) { }

  getAll<T>(): Observable<T> {
    return this.httpClient.get<T>(this.url);
  }

  get<T>(id: string): Observable<T> {
    return this.httpClient.get<T>(`${this.url}/${id}`);
  }

  post<T>(body: any): Observable<T> {
    return this.httpClient.post<T>(this.url, body);
  }

  put<T>(body: any): Observable<T> {
    return this.httpClient.put<T>(`${this.url}/${body.id}`, body);
  }

  delete<T>(id: string): Observable<T> {
    return this.httpClient.delete<T>(`${this.url}/${id}`);
  }

}

