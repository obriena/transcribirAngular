import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { ServerMessage } from './models/serverMessage';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RetrieveMediaService {
  mediaRetrievalUrl: string;
  transcriptUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { 
    this.mediaRetrievalUrl = environment.mediaService;
    this.transcriptUrl = environment.retrieveTranscriptService;
  }

  retrieveTranscriptForMediaWithUserId(mediaId: string, userId: string): Observable <ServerMessage> {
    console.log("Retrieve Transcript Service" );
    let transcriptUrl = this.transcriptUrl + mediaId + "/" + userId;
    return this.http.get<ServerMessage> (transcriptUrl, this.httpOptions).pipe(retry(3), catchError(this.handleError));
  }

  retrieveMediaForUser(userName: string): Observable<ServerMessage> {
    console.log("Retrieve Media Service" );
    let userMediaUrl = this.mediaRetrievalUrl + userName;
    return this.http.get<ServerMessage> (userMediaUrl, this.httpOptions).pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error:HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
