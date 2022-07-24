import { Component, OnInit } from '@angular/core';
import { ServicioVehiculoService } from '../servicios/servicio-vehiculo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public celdas:any[]=[]

  constructor(public servicioCelda:ServicioVehiculoService) { 

    this.servicioCelda.buscarCeldas()
    .subscribe(respuesta=>{
      this.celdas=respuesta.data
      console.log(this.celdas)
    })

  }

  ngOnInit(): void {
  }

}
