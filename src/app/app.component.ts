import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './_services/app-service.service';
import { Router } from '@angular/router';

declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'proyecto';

  menus: any = [];
  usuario:  any;

  constructor(
   // private appService: AppServiceService,
   
  ) { }

  ngOnInit() {
   
  

    



  }

  

  

 
  


}
