import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PlaceHolder } from '../place-holder';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrl: './profesores.component.css'
})
export class ProfesoresComponent {

  public url:string = 'http://localhost:3000/profesores'
  public resultadoPeticion: any;
  public inputIdGet:string = "";
  constructor (private http: HttpClient){
    
  }
  get(){
    this.http.get<PlaceHolder>(this.url+ "/"+ this.inputIdGet)
    .subscribe(
      {
      next:(respuesta : PlaceHolder) => {
        this.resultadoPeticion=respuesta
      console.log(this.resultadoPeticion.inputIdGet);
      console.log(this.resultadoPeticion.usuario)
      console.log(this.resultadoPeticion.email)
      console.log(this.resultadoPeticion.modulo)
      console.log(this.resultadoPeticion.horas)
      console.log(this.resultadoPeticion.foto)
    },
      error: (err)=>{console.log("error")}

    }
    )
  }


  
}
