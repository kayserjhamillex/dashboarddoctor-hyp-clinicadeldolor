import { Component } from '@angular/core';

@Component({
  selector: 'app-patologico-list',
  standalone: true,
  imports: [],
  templateUrl: './patologico-list.component.html',
  styleUrl: './patologico-list.component.css'
})
export default class PatologicoListComponent implements OnInit {
  antecedentes: any = [];
  data: any = [];
  bandera = false;
  codigoelegido;
  mensaje;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private antpatologicoService: AntpatologicoService,
    private antpatologicocitaService: AntpatologicocitaService,
  ) { }

  getrelacionconcita(codigo) {
    this.antpatologicocitaService.getfordelete(codigo).subscribe(
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
        this.toastr.error('Error API get antecedente patoligico - cita');
      }
    );
  }

  deletedata(codigo) {
    if (this.bandera === true) {
      setTimeout(
        () => {
          for (const item of this.data) {
            const parametro = item.id;
            this.antpatologicocitaService.deleteAntPatologicoCita(parametro).subscribe(
              resdellab => {
                this.mensaje = resdellab;
                console.log('antecendete cita eliminado');
              }, err => {
                this.toastr.error('Error api delete antecendete cita');
              }
            );
          }
        },
        1000
      );
      setTimeout(
        () => {
          this.antpatologicoService.deleteAntPatologico(codigo).subscribe(
            resdellab => {
              this.mensaje = resdellab;
              window.location.reload();
              console.log('antecendete eliminado');
            }, err => {
              this.toastr.error('Error api delete antecendete');
            }
          );
        },
        1000
      );
    } else {
      setTimeout(
        () => {
          this.antpatologicoService.deleteAntPatologico(codigo).subscribe(
            resdellab => {
              this.mensaje = resdellab;
              window.location.reload();
              console.log('antecendete eliminado');
            }, err => {
              this.toastr.error('Error api delete antecendete');
            }
          );
        },
        1000
      );
    }
  }

  ngOnInit(): void {
    this.getantecedentes();
  }

  // tslint:disable-next-line: typedef
  getantecedentes() {
    this.antpatologicoService.getAntPatologicos().subscribe(
      res => {
        this.antecedentes = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'antecedente3',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar antecedente');
    this.router.navigate(
      [
        'admin',
        'antecedente3',
        'update',
        codigoaeditar
      ]
    );
  }

}

