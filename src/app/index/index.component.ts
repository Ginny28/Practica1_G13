import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../_services/app-service.service';
import { Historial } from './historial';



declare var swal: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public tmp = new Historial();
  bodyMap: any;
  texto: any;
  fileContent: any;
  conter = 1;
  datos: Historial[] = [];
  cols: any[];
  flagTable = false;

  
  constructor(private appService: AppServiceService) { 
    this.cols = [
      {field: 'id', header: 'Número'},
      {field: 'word', header: 'Palabra'},
      {field: 'status', header: 'Status'}
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
            let tmps = new Historial();
            tmps.id = this.conter;
            tmps.word = this.texto;  
            tmps.status = 'Ok';
            this.datos.push(tmps);
            this.conter = this.conter + 1 ;
            swal.fire(
              'Good job!',
              'Se envió el texto',
              'success'
            )
          }
        );
        
      
    }

    history(){
      this.flagTable = true;
    }
    
  

  
}
