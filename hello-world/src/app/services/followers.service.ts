import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {DataService} from './dataService.service';

@Injectable({
  providedIn: 'root'
})
export class FollowersService extends DataService {
  // private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }

  // getPosts() {
  //   return this.http.get(this.url);
  //   // .pipe(
  //   //   retry(1),
  //   //   catchError(this.handleError)
  //   // );
  // }
  //
  // createPost(post) {
  //   return this.http.post(this.url, JSON.stringify(post));
  // }
  //
  // public updatePost(post) {
  //   return this.http.put(this.url + '/' + post.id, JSON.stringify({isRead: true}));
  // }
  //
  // public deletePost(post) {
  //   return this.http.delete(this.url + '/' + post.id);
  //     // .pipe(
  //     //   retry(1),
  //     //   catchError(this.handleError)
  //     // );
  // }
  //
  // // errorHandler(error: HttpErrorResponse) {
  // //   return new Observable(error.message || 'server error.');
  // // }
  //
  // private handleError(error) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // client-side error
  //     errorMessage = `Error: ${error.error.message}`;
  //     alert(`${errorMessage}`);
  //
  //   } else {
  //     // server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //     alert(`${errorMessage}`);
  //   }
  //   console.log('error = ', error);
  //   return throwError(errorMessage);
  // }
}
