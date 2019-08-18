
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';

const appRoutes: Routes = [
  /*{ path: 'fina-reporte', component: FinaReporteComponent, canActivate: [AppGuardGuard] },*/
  {path: 'home', component: IndexComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
