import { Component } from '@angular/core';

@Component({
  selector: 'app-duracion-list',
  standalone: true,
  imports: [],
  templateUrl: './duracion-list.component.html',
  styleUrl: './duracion-list.component.css'
})
export default class DuracionListComponent implements OnInit {
  duracions: any = [];
  data: any = [];
  bandera = false;
  codigoelegido;
  mensaje;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private duracionService: DuracionService,
    private duracioncitaService: DuracioncitaService,
  ) { }

  getrelacionconcita(codigo) {
    this.duracioncitaService.getfordelete(codigo).subscribe(
      resdata => {
        this.data = resdata;
        this.codigoelegido = codigo;
        const parametro = Object.entries(this.data).length;
        if (parametro > 0) {
          this.bandera = true;
        } else {
          this.bandera = false;
        }
      }, err => {
        this.toastr.error('Error API get duracion - cita');
      }
    );
  }

  deletedata(codigo) {
    if (this.bandera === true) {
      setTimeout(
        () => {
          for (const item of this.data) {
            const parametro = item.id;
            this.duracioncitaService.deleteDuracionCita(parametro).subscribe(
              resdellab => {
                this.mensaje = resdellab;
                console.log('duracion cita eliminado');
              }, err => {
                this.toastr.error('Error api delete duracion cita');
              }
            );
          }
        },
        1000
      );
      setTimeout(
        () => {
          this.duracionService.deleteDuracion(codigo).subscribe(
            resdellab => {
              this.mensaje = resdellab;
              window.location.reload();
              console.log('duracion eliminado');
            }, err => {
              this.toastr.error('Error api delete duracion');
            }
          );
        },
        1000
      );
    } else {
      setTimeout(
        () => {
          this.duracionService.deleteDuracion(codigo).subscribe(
            resdellab => {
              this.mensaje = resdellab;
              window.location.reload();
              console.log('duracion eliminado');
            }, err => {
              this.toastr.error('Error api delete duracion');
            }
          );
        },
        1000
      );
    }
  }

  ngOnInit(): void {
    this.getduracions();
  }

  // tslint:disable-next-line: typedef
  getduracions() {
    this.duracionService.getDuracions().subscribe(
      res => {
        this.duracions = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'duracion',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar duracion');
    this.router.navigate(
      [
        'admin',
        'duracion',
        'update',
        codigoaeditar
      ]
    );
  }

}

