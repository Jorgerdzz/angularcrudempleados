import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { Empleado } from "../models/empleado";
import { User } from "../models/user";

@Injectable()
export class ServiceEmpleado{

    constructor(
        private _http:HttpClient
    ){}

    getOficios(): Observable<Array<string>>{
        let url = environment.urlApiEmpleados;
        let request = "api/Empleados/Oficios";
        return this._http.get<Array<string>>(url + request);
    }

    getEmpleadosOficio(oficio: string): Observable<Array<Empleado>>{
        let url = environment.urlApiEmpleados;
        let request = "api/Empleados/EmpleadosOficio/" + oficio;
        return this._http.get<Array<Empleado>>(url + request);
    }

    login(user: User): Observable<any>{
        let url = environment.urlAuthLogin;
        let request = "Auth/Login";
        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");
        return this._http.post(url + request, user, {headers: header});
    }

    getPerfilEmpleado(): Observable<Empleado>{
        let url = environment.urlAuthLogin;
        let request = "api/Empleados/PerfilEmpleado";
        let header = new HttpHeaders();
        header = header.set("Authorization", "bearer " + sessionStorage.getItem('token'));
        return this._http.get<Empleado>(url + request, {headers: header});
    }

}