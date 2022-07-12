import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const BASE_URL = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private options = { headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
  };

  constructor(
    private http: HttpClient
  ) { }

  public post(path: string, body: object = {}): Observable<any> {
    return this.http.post(BASE_URL + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public postUpload(path: string, body: object = {}): Observable<any> {
    return this.http.post(BASE_URL + path, body)
      .pipe(catchError(this.formatErrors));
  }

  public get(path: string): Observable<any> {
    return this.http.get(BASE_URL + path, this.options)
      .pipe(catchError(this.formatErrors));
  }

  public put(path: string, body: object = {}): Observable<any> {
    return this.http.put(BASE_URL + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public delete(path: string): Observable<any> {
    return this.http.delete(BASE_URL + path)
      .pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }
}
