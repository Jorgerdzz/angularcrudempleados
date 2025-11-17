import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleado } from '../../services/service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-component',
  imports: [],
  templateUrl: './perfil-component.html',
  styleUrl: './perfil-component.css',
  providers: [ServiceEmpleado]
})
export class PerfilComponent implements OnInit{

  public empleado!: Empleado;

  constructor(
    private _service:ServiceEmpleado,
    private _router:Router
  ){}

  ngOnInit(): void {
    if(sessionStorage.length===0){
      this._router.navigate(["/login"])
    }else{
      this._service.getPerfilEmpleado().subscribe(response=>{
        this.empleado = response;
      })
    }
  }

}
