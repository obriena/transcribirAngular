import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";
import { DespiertaService } from '../despierta.service';
import { ServerMessage } from '../models/serverMessage';

@Component({
  selector: 'app-footer-widget',
  templateUrl: './footer-widget.component.html',
  styleUrls: ['./footer-widget.component.css']
})
export class FooterWidgetComponent implements OnInit {

  env = environment;

  constructor(private despiertaServicio: DespiertaService) {

   }

  ngOnInit() {
  }

  wakeUpServers() {
    this.despiertaServicio.despiertaServicio().subscribe((serverMessage: ServerMessage) => {
      if (serverMessage) {
        console.log("Server Response: " + serverMessage.message);
      } else {
          console.log("algo malo sucedio");
      }
    });
  }
}
