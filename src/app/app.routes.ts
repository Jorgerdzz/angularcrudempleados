import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { EmpleadosOficioComponent } from './components/empleados-oficio-component/empleados-oficio-component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path:"login", component: LoginComponent},
    {path: "perfil", component: PerfilComponent},
    {path: "empleados/:oficio", component: EmpleadosOficioComponent}
];
