import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";
import { DespiertaService } from '../despierta.service';
import { ServerMessage } from '../models/serverMessage';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-footer-widget',
  templateUrl: './footer-widget.component.html',
  styleUrls: ['./footer-widget.component.css']
})
export class FooterWidgetComponent implements OnInit {

  env = environment;

  constructor(private despiertaServicio: DespiertaService, private spinner: NgxSpinnerService) {

   }

  ngOnInit() {
    
  }
  ngAfterViewInit(): void {}

  wakeUpServers() {
    if (this.spinner == null) {
      console.log("spinner is null")
    }
    else {
      console.log("Spinner is not null")
    }
    this.spinner.show();
    try {
      this.despiertaServicio.despiertaServicio().subscribe((serverMessage: ServerMessage) => {
        if (serverMessage) {
          console.log("Server Response: " + serverMessage.message);
        } else {
            console.log("algo malo sucedio");
        }
        this.spinner.hide();
      }, e => {
        this.spinner.hide()
        window.alert(e)
      });
    }
    catch (error){
      window.alert(error);
      this.spinner.hide();
    }
  }
}
