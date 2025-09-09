import { Component } from '@angular/core';

@Component({
  selector: 'app-frecuencia-update',
  standalone: true,
  imports: [],
  templateUrl: './frecuencia-update.component.html',
  styleUrl: './frecuencia-update.component.css'
})
export default class FrecuenciaUpdateComponent implements OnInit {
  frecuencias: any = [];
  data: any = [];
  bandera = false;
  codigoelegido;
  mensaje;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private frecuenciaService: FrecuenciaService,
    private frecuenciacitaService: FrecuenciacitaService,
  ) { }

  getrelacionconcita(codigo) {
    this.frecuenciacitaService.getfordelete(codigo).subscribe(
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
        this.toastr.error('Error API get frecuencia - cita');
      }
    );
  }

  deletedata(codigo) {
    if (confirm('¿Estas seguro de eliminar antecedente patologico? - eliminaras tambien la vinculacion con las citas')) {
      if (this.bandera === true) {
        setTimeout(
          () => {
            for (const item of this.data) {
              const parametro = item.id;
              this.frecuenciacitaService.deleteFrecuenciaCita(parametro).subscribe(
                resdellab => {
                  this.mensaje = resdellab;
                  console.log('frecuencia cita eliminado');
                }, err => {
                  this.toastr.error('Error api delete frecuencia cita');
                }
              );
            }
          },
          1000
        );
        setTimeout(
          () => {
            this.frecuenciaService.deleteFrecuencia(codigo).subscribe(
              resdellab => {
                this.mensaje = resdellab;
                window.location.reload();
                console.log('frecuencia eliminado');
              }, err => {
                this.toastr.error('Error api delete frecuencia');
              }
            );
          },
          1000
        );
      } else {
        setTimeout(
          () => {
            this.frecuenciaService.deleteFrecuencia(codigo).subscribe(
              resdellab => {
                this.mensaje = resdellab;
                window.location.reload();
                console.log('frecuencia eliminado');
              }, err => {
                this.toastr.error('Error api delete frecuencia');
              }
            );
          },
          1000
        );
      }
    }
  }

  ngOnInit(): void {
    this.getfrecuencias();
  }

  // tslint:disable-next-line: typedef
  getfrecuencias() {
    this.frecuenciaService.getFrecuencias().subscribe(
      res => {
        this.frecuencias = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'frecuencia',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar frecuencia');
    this.router.navigate(
      [
        'admin',
        'frecuencia',
        'update',
        codigoaeditar
      ]
    );
  }

}

