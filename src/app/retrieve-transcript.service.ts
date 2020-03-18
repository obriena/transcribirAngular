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
export class RetrieveTranscriptService {
  transcriptRetrievalUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) {
    this.transcriptRetrievalUrl = environment.retrieveTranscriptService;
   }

   retrieveTranscriptForUser(userName: string, mediaId: string){
    console.log("Retrieve transcript service" );
    let transcriptUrl = this.transcriptRetrievalUrl + mediaId + "/" + userName;
    return this.http.get<ServerMessage> (transcriptUrl, this.httpOptions).pipe(retry(3), catchError(this.handleError));
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
