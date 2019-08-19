import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../_services/app-service.service';


interface Historial{
  nombre1: any;
  nombre2: any;
  nombre3: any;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  bodyMap: any;
  texto: any;
  fileContent: any;
  datos: Historial[];
  cols: any[];
  flagTable = false;

  
  constructor(private appService: AppServiceService) { 
    this.cols = [
      {field: 'nombre1', header: 'Dato1'},
      {field: 'nombre2', header: 'Dato2'},
      {field: 'nombre3', header: 'Dato3'}
    ]

  }

  ngOnInit() {
  }
    encoderMorseToText()
    {
      this.flagTable =false;
      this.bodyMap = {
        id: "1",
        firstname : this.texto,
        lastname: this.texto
      };
      this.appService.getMorseEncodre(this.bodyMap)
        .subscribe(
          (res: any) => {
            console.log("resultado" + res);
          }
        );
      
    }

    history(){
      this.flagTable = true;
      var _fileURL = '../../assets/history.json';
      this.appService.getFile(_fileURL)
      .subscribe((res:any )=> {
        this.datos = res.datos;
      } );
  
    }
    
  

  
}
