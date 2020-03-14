import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-confirmation-widget',
  templateUrl: './registration-confirmation-widget.component.html',
  styleUrls: ['./registration-confirmation-widget.component.css']
})
export class RegistrationConfirmationWidgetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irAlIncinio(){
    this.router.navigate(['/login']);
  }

}
