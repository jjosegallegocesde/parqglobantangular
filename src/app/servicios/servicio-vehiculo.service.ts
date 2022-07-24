import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioVehiculoService {

  constructor(public peticion:HttpClient) { 

    console.log("arrancando el servicio")

  }


  buscarCeldas():Observable<any>{
    return this.peticion.get('https://serverparq.herokuapp.com/api/v1/parqueadero/celdas')
  }

}
