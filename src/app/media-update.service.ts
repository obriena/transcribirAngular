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
export class MediaUpdateService {
  deleteMediaUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.deleteMediaUrl = environment.updateMediaService;
  }

  eliminarMediaParaUsuarioConMediaId(userName: string, mediaId: string): Observable<ServerMessage> {
    console.log("Eliminar Servicio para Media" );
    let userMediaUrl = this.deleteMediaUrl + "deleteMedia/" + mediaId + "/" + userName;
    return this.http.delete<ServerMessage> (userMediaUrl, this.httpOptions).pipe(retry(3), catchError(this.handleError));
  }

  enviaraGoogle(userName: string, mediaId: string, language: string){
    let userMediaUrl = this.deleteMediaUrl + "requestGoogleTranscription/" + mediaId + "/" + userName + "/" + language;
    console.log(userMediaUrl);
    return this.http.post<ServerMessage> (userMediaUrl, this.httpOptions).pipe(retry(3), catchError(this.handleError));
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
      'Lo siento, alguna mal sucedió. Por favor intente de nuevo, más tarde.');
  };
}
