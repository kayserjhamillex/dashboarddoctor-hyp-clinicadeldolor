import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    imports: [
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export default class LoginComponent implements OnInit {
  parametro = {
    usuario: '',
    contra: ''
  };
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
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private doctorService: DoctorService
  ) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  login() {
    console.log(this.parametro);
    const parametro1 = this.parametro.usuario;
    const parametro2 = this.parametro.contra;
    console.log(parametro1);
    console.log(parametro2);
    this.doctorService.getlogin(parametro1, parametro2).subscribe(
      res => {
        if (res) {
          this.doctor = res;
          this.doctorService.loggin(res);
          this.toastr.success('Bienvenido Doctor');
        } else {
          this.toastr.error('Usuario y Contraseña incorrecto');
        }
      }, err => {
        console.log(err);
      }
    );
  }
  // tslint:disable-next-line: typedef
  recover() {
    this.toastr.info(
      'Confirmar correo para recuperar Contraseña'
    );
    this.router.navigate(
      [
        'auth',
        'recover'
      ]
    );
  }
}
