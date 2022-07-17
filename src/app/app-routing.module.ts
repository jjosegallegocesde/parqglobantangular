import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

const routes: Routes = [

  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'vehiculos',component:VehiculosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
