import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Scale } from '../model/scale';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScaleService {
  private readonly SCALE_URL = 'api/scale';

  constructor(private http: HttpClient) { }

  public getScale(tonic: string): Observable<Scale> {
    const url = `${this.SCALE_URL}`;
    const options: HttpParams = new HttpParams().set('tonic', tonic);
    return this.http.get<Scale>(url, { params: options }).pipe(
      retry(2),
      catchError(this.handleError<Scale>(`getScale tonic=${tonic}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
