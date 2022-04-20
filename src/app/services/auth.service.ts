import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private configUrl: string = '/api/auth/';

  constructor(private http: HttpClient) {}

  public initSign(ssn: string): Observable<any> {
    return this.http.post<any>(this.configUrl + 'initSign', {ssn}, httpOptions).pipe(
      catchError(this.handleError)
    )
  }

  // Error handler
  private handleError(error: HttpErrorResponse): any {
    if (error.status === 0) {
      return throwError(() => new HttpErrorResponse({error: {message: 'An error occured, try reloading the page.'}}));
    } else {
      return throwError (() => error)
    }
  }
}
