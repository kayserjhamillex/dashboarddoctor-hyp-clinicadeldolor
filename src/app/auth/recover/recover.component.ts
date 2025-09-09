import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-recover',
    imports: [
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
    templateUrl: './recover.component.html',
    styleUrl: './recover.component.css'
})
export default class RecoverComponent implements OnInit {
  correo = '';
  doctor: Doctor = {
    id: 0,
    Name: '',
    LastName: '',
    MedicalSchoolNumber: '',
    Email: '',
    Password: '',
    Photo: '',
    Code: '',
    Condition: ''
  };
  respuestita: any = [];
  codigo = 0;
  respuesta: any = [];
  caracteres = 'Aa0BbCc1DdEe2FfGgHh3IiJj4KkLl5MmNn6OoPp7QqRr8SsTt9UuVv*WwXxYyZz$';
  laclave;
  long = 10;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private doctorService: DoctorService
  ) { }
  // tslint:disable-next-line: typedef
  getNumero(min, max) {
    return Math.floor( Math.random() * ( max - min ) ) + min;
  }
  // tslint:disable-next-line: typedef
  generaryenviar(par) {
    let numero;
    let clave = '';
    /*creacion de clave*/
    for ( let i = 0; i < this.long; i++)
    {
      numero = this.getNumero( 0, this.caracteres.length );
      clave += this.caracteres.substring( numero, numero + 1 );
      this.laclave = clave;
    }
    console.log(clave);
    this.doctor.Code = this.laclave;
    this.doctor.Condition = 'activo';
    this.doctorService.updateDoctor(par, this.doctor).subscribe(
      res => {
        if (res) {
          this.respuestita = res;
          this.toastr.info('se genero el codigo');
        }
      }, err => {
        this.toastr.error('Error al generar el codigo');
      }
    );
  }
  // tslint:disable-next-line: typedef
  confirmar() {
    console.log(this.correo);
    this.doctorService.getSearchEmail(this.correo).subscribe(
      res => {
        if (res) {
          this.doctor = res;
          this.codigo = this.doctor.id;
          // setTimeout(this.generaryenviar, 2000);
          const codigo = this.doctor.id.toString();
          this.generaryenviar(codigo);
          this.doctorService.getrecover(codigo).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              this.respuesta = res;
              console.log(this.respuesta);
              this.toastr.success('Por favor Confirme la actualizacion en su correo');
              this.router.navigate(
                [
                  'auth',
                  'password',
                  codigo
                ]
              );
            },
            err => {
              this.toastr.error('No se pudo enviar el Correo');
            }
          );
        } else {
          this.toastr.error('Correo no es de la empresa');
        }
      },
      err => {
        this.toastr.error('Usted no es un trabajador de la empresa');
      }
    );
  }
  ngOnInit(): void {
  }

}


