import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { ServiceEmpleado } from '../../services/service.empleados';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
  providers: [ServiceEmpleado]
})
export class LoginComponent {

  public user!: User;

  constructor(
    private _service:ServiceEmpleado,
    private _router:Router
  ){
    this.user={
      userName: "",
      password: ""
    }
  }

  login(): void{
    this._service.login(this.user).subscribe((response)=>{
      sessionStorage.setItem('token', response.response);
      Swal.fire({
        icon: 'success',
        title: '¡Login completado!',
        timer: 3000,
        timerProgressBar: true
      }).then(()=>{
        this._router.navigate(['/perfil'])
      })
    })
  }

}
