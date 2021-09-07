import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable()
export class DataService {

  constructor(private url: string, private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url)
      .pipe(
        map(response => response),
        retry(1),
        catchError(this.handleError)
      );
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        retry(1),
        map(response => response),
        catchError(this.handleError)
      );
    ;
  }

  public update(resource) {
    return this.http.put(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
      .pipe(
        retry(1),
        map(response => response),
        catchError(this.handleError)
      );
    ;
  }

  public delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        retry(1),
        map(response => response),
        catchError(this.handleError)
      );
  }


  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
      alert(`${errorMessage}`);

    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      alert(`${errorMessage}`);
    }
    console.log('error = ', error);
    return throwError(errorMessage);
  }
}
