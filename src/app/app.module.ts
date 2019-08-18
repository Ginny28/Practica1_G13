import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './_util/app-routing.module';

import { AppComponent } from './app.component';


//primeNg
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {CarouselModule} from 'primeng/carousel';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    //primeNg
    ButtonModule,
    CarouselModule,
    TableModule,
    AccordionModule,
    TabMenuModule,
    TabViewModule,
    CardModule,
    PanelModule    
  ],
  providers: [    
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
