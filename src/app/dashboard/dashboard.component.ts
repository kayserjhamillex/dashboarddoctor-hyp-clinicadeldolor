import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    imports: [
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export default class DashboardComponent implements OnInit {
  public sidebarMinimized = false;
  public sidebarColor = 'red';
  client;
  // tslint:disable-next-line: member-ordering
  public parametrodeimagen = 0;
  // tslint:disable-next-line: member-ordering
  wasa = '../assets/img/sidebar-5.jpg';
  // tslint:disable-next-line: member-ordering
  raiz = '../assets/img/';
  // tslint:disable-next-line: member-ordering
  fondo1 = this.raiz + 'sidebar-1.jpg';
  // tslint:disable-next-line: member-ordering
  fondo2 = this.raiz + 'sidebar-2.jpg';
  // tslint:disable-next-line: member-ordering
  fondo3 = this.raiz + 'sidebar-3.jpg';
  // tslint:disable-next-line: member-ordering
  fondo4 = this.raiz + 'sidebar-4.jpg';
  banderita = false;
  especialidades: any = [];
  constructor(
    private router: Router,
    private toast: ToastrService,
    private doctorService: DoctorService,
    private especialistaService: EspecialistaService
  ) { }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  cambiarimagen(param) {
    this.parametrodeimagen = param;
    switch (this.parametrodeimagen) {
      case 1:
        this.wasa = this.fondo1;
        break;
      case 2:
        this.wasa = this.fondo2;
        break;
      case 3:
        this.wasa = this.fondo3;
        break;
      case 4:
        this.wasa = this.fondo4;
        break;
      default:
        this.wasa = '../assets/img/sidebar-5.jpg';
        break;
    }
  }

  loggout() {
    this.doctorService.loggout();
    this.router.navigate(
      [
        'auth',
        'login'
      ]
    );
  }
  edit() {
    const parametro = this.client.id;
    this.router.navigate(
      [
        'admin',
        'doctor',
        'update',
        parametro
      ]
    );

  }
  ngOnInit(): void {
    if (this.doctorService.isLoggedIn()) {
      this.client = JSON.parse(localStorage.getItem('doctor'));
      const parametro = this.client.id;
      this.especialistaService.getEspecialistaFilterDoctor(parametro).subscribe(
        res => {
          this.especialidades = res;
          console.log(this.especialidades);
          for (const item of this.especialidades) {
            const parametrito = item.EspecialidadId;
            if (parametrito === 2) {
              this.banderita = true;
            }
          }
          if (this.banderita === true) {
            this.toast.info('Permitido acceso a Historia del dolor');
          } else {
            this.toast.info('Sin acceso a Historia del dolor');
          }
        }, err => {
          this.toast.error('Error api get especialidades de doctor');
        }
      );
      // this.router.navigate(
      //   [
      //     'admin',
      //     'home'
      //   ]
      // );
    } else {
      this.router.navigate(
        [
          'auth',
          'login'
        ]
      );
    }
  }

}


