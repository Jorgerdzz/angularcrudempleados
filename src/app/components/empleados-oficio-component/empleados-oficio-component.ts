import { Component, OnInit } from '@angular/core';
import { ServiceEmpleado } from '../../services/service.empleados';
import { Empleado } from '../../models/empleado';
import { ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleados-oficio-component',
  imports: [FormsModule],
  templateUrl: './empleados-oficio-component.html',
  styleUrl: './empleados-oficio-component.css',
  providers: [ServiceEmpleado]
})
export class EmpleadosOficioComponent implements OnInit{

  public empleados!: Array<Empleado>;

  constructor(
    private _sercice:ServiceEmpleado,
    private _activeRoute: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.getEmpleadosOficio();
  }

  getEmpleadosOficio(): void{
    this._activeRoute.params.subscribe((params:Params)=>{
      this._sercice.getEmpleadosOficio(params['oficio']).subscribe(response=>{
        this.empleados = response;
      })
    })
  }

}
