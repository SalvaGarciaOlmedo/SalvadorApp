import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PlaceHolder } from '../place-holder';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent  {

  public url:string = 'http://localhost:3000/alumnos'
  public resultadoPeticion: any;
  public inputIdGet:string = "";
  public inputUsuarioGet:string = "";

  public inputEmailGet:string = "";
  public inputEdadGet:string = "";




  constructor (private http: HttpClient){
    
  }
  post(){
    this.http.post(this.url, 
      {
        id:this.inputIdGet, 
        usuario:this.inputUsuarioGet,
        email:this.inputEmailGet,
        edad:this.inputEdadGet
      }).subscribe(data =>{this.resultadoPeticion = data})
  }


  
}
