import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceEmpleado } from '../../services/service.empleados';

@Component({
  selector: 'app-menu-component',
  imports: [RouterLink],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
  providers: [ServiceEmpleado]
})
export class MenuComponent implements OnInit{

  public oficios!: Array<string>

  constructor(
    private _service:ServiceEmpleado
  ){}

  ngOnInit(): void {
    this._service.getOficios().subscribe(response=>{
      console.log(response)
      this.oficios = response;
    })
  }

}
