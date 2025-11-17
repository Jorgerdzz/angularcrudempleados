
export class Empleado{
    constructor(
       public idEmpleado: number,
       public apellido: string,
       public oficio: string,
       public salario: number,
       public director: number,
       public fechaAlta: string,
       public idDepartamento: number 
    ){}
}