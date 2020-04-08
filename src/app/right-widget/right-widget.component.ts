import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from "@angular/common/http";
import { UserDataStoreService } from '../user-data-store.service';
import { Media } from '../models/media';
import { RetrieveMediaService } from '../retrieve-media.service';
import { ServerMessage } from '../models/serverMessage';
import { MediaDataStoreService } from '../media-data-store.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-right-widget',
  templateUrl: './right-widget.component.html',
  styleUrls: ['./right-widget.component.css']
})
export class RightWidgetComponent implements OnInit {

  loggedInUser: User;
  mediaFiles: Media[] = [];
  message: string = "";
  hasBeenSelected: boolean = false;

  constructor(private httpClient: HttpClient, 
              private userDataStore: UserDataStoreService,
              private retrieveMediaService: RetrieveMediaService,
              private mediaDataService: MediaDataStoreService,
              private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    
    this.actualizorTranscripciones();

    let mediaSubject = this.mediaDataService.mediaFiles;
    mediaSubject.subscribe((newFiles: Media[]) => {
      console.log("RightWidget: Recieved message from mediaDataService.")
      if (newFiles.length > 0) {
        let newMedia: Media = newFiles[newFiles.length - 1];
        this.mediaFiles.push(newMedia);
        this.message = "Retrieved " + this.mediaFiles.length + " items";
      } 
      if (this.hasBeenSelected) {
        console.log("algo fue seleccionado")
        if (newFiles.length == 0) {
          console.log("Nada seleccionado")
          this.hasBeenSelected = false;
          this.actualizorTranscripciones();
        }
      }
    });


  }
  actualizorTranscripciones () {

    let userSubject = this.userDataStore.users;
    userSubject.subscribe((usersData: User[]) =>{
      
      if (usersData.length > 0){
        this.spinner.show();
        this.loggedInUser = usersData[0];
        console.log("Right Component user first name: " +  this.loggedInUser.firstName);
        this.retrieveMediaService.retrieveMediaForUser(this.loggedInUser.credentials.userId).subscribe((serverMessage: ServerMessage) => {
          this.spinner.hide();
          if (serverMessage.status) {
            this.message = serverMessage.message;
            this.mediaFiles = serverMessage.payload;
          }
        }, e => {
          this.spinner.hide()
          window.alert(e)
        });
      }
    });
  }

  onSelect(media: Media): void {
    console.log("Setting Selected Media");
    this.hasBeenSelected = true;
    this.mediaDataService.selectMediaFile(media); 
  }

}
