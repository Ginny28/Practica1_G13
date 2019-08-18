import { UtilServiceService } from './util-service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private urlSegurity: string[] = [];

  constructor(
    private http: HttpClient,
    private util: UtilServiceService
  ) { }

  



  getMorseEncodre(body: any): Observable<any> {
    return this.http.post(`${'https://3n2bjmr03a.execute-api.us-east-1.amazonaws.com/Inicial/user'}`,body)
      .pipe(
        catchError(e => this.util.handleError(e))
      );
  }

  public getFile(file: any): Observable<any> {
    return this.http.get<any>(file)
            
  }

}
