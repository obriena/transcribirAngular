import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MediaDataStoreService } from '../media-data-store.service';
import { MediaUpdateService } from '../media-update.service';
import { RetrieveMediaService } from '../retrieve-media.service';
import { Media } from '../models/media';
import { Router } from '@angular/router';
import { environment } from "../../environments/environment";
import { NgxSpinnerService } from "ngx-spinner";
import { ServerMessage } from '../models/serverMessage';


@Component({
  selector: 'app-view-media-widget',
  templateUrl: './view-media-widget.component.html',
  styleUrls: ['./view-media-widget.component.css']
})

export class ViewMediaWidgetComponent implements OnInit, AfterViewInit{
  selectedMedia: Media;
  tabNameList: string[] = [];
  transcripts: any[] = [];
  trans: string[] = [];
  mp3Link: string;
  private showPlayer: boolean = false;
  selected: string;

  languages = [
    {value: 'es-ES', viewValue: 'Spanish (Castilian)'},
    {value: 'es-AR', viewValue: 'Spanish (Argentinian)'},
    {value: 'es-BO', viewValue: 'Spanish (Bolivia)'},
    {value: 'es-CL', viewValue: 'Spanish (Chilean)'},
    {value: 'es-CO', viewValue: 'Spanish (Colombian)'},
    {value: 'es-MX', viewValue: 'Spanish (Mexican)'},
    {value: 'es-PE', viewValue: 'Spanish (Peruvian)'},
  ];

  constructor(private httpClient: HttpClient,
              private mediaDataService: MediaDataStoreService,
              private updateMediaService: MediaUpdateService,
              private retrieveMediaService: RetrieveMediaService,
              private router: Router,
              private spinner: NgxSpinnerService) {
    
  }

  ngOnInit() {
    let selectedMediaSubject = this.mediaDataService.selectedMediaFiles;
    selectedMediaSubject.subscribe((files: Media[])=>{

      if (files.length > 0) {
        this.spinner.show();

        this.selectedMedia = files[files.length -1];

        this.mp3Link = environment.playMediaService + this.selectedMedia.mediaId + "/" + this.selectedMedia.userId;
        console.log("Media Link: " + this.mp3Link);   
       
        this.retrieveMediaService.retrieveTranscriptForMediaWithUserId(this.selectedMedia.mediaId, this.selectedMedia.userId).subscribe((serverMessage: ServerMessage) => {
          this.spinner.hide();
          if (serverMessage.status) {
            let payload:[] = serverMessage.payload;
            this.tabNameList.length = 0;
            this.transcripts.length = 0;
            for (let index = 0; index < payload.length; index++) {
              let name = payload[index]['source'] + " " + payload[index]['language'];
              this.tabNameList.push(name);
              let stringObject = payload[index]['transcription'];  //string
              // let resultObj = JSON.parse(stringObject);
              // this.transcripts = resultObj['results'];
              this.transcripts.push(JSON.parse(stringObject));
              console.log("loaded " + this.transcripts.length);
            }
          }
        }, e => {
          this.spinner.hide()
          window.alert(e)
        });
      }
    });
  }

  updateTranscript(selectedTranscript: number){
    console.log("selected index: " + selectedTranscript);
    this.trans.length = 0;

    console.log("Number of transcripts: " + this.transcripts.length);

    let aTranscript = this.transcripts[selectedTranscript]['results'];
    console.log("Sie of selected transcript: " + aTranscript.length);
    for (let index = 0; index < aTranscript.length; index++) {
      let text = "confianza: " + aTranscript[index]['alternatives'][0]['confidence'] + " " + aTranscript[index]['alternatives'][0]['transcript'];
      this.trans.push(text)
    }
    
      
    console.log("Size of list: " + this.trans.length);
  }

  ngAfterViewInit() {
    if (!this.selectedMedia){
      this.router.navigate(['/login']);
    }
  }

  goToUploadFile(){
    this.mediaDataService.clearSelectedMediaFile();
    this.router.navigate(['/captureaudio']);
  }

  deleteMedia() {
    this.spinner.show();
    this.updateMediaService.eliminarMediaParaUsuarioConMediaId(this.selectedMedia.userId, this.selectedMedia.mediaId).subscribe((serverMessage: ServerMessage) => {
      this.spinner.hide();
      if (serverMessage.status) {
        console.log("borrado el mensaje")
        this.mediaDataService.clearSelectedMediaFile()
        this.mediaDataService.removeMediaFile(this.selectedMedia);
        this.router.navigate(['/captureaudio']);
      } else {
        console.log("Servicio Estado: " + serverMessage.status);
      }
    }, e => {
      this.spinner.hide()
      window.alert(e)
    });
  }


  enviarGoogle() {
     this.spinner.show();
     console.log(this.selected);
     console.log(this.selectedMedia.mediaId)
     console.log(this.selectedMedia.userId)
     this.updateMediaService.enviaraGoogle(this.selectedMedia.userId, this.selectedMedia.mediaId, this.selected).subscribe((serverMessage: ServerMessage) => {
      this.spinner.hide();
    }, e => {
      this.spinner.hide()
      window.alert(e)
    });
  }
}
