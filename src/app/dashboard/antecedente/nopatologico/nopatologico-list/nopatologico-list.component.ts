import { Component } from '@angular/core';

@Component({
  selector: 'app-nopatologico-list',
  standalone: true,
  imports: [],
  templateUrl: './nopatologico-list.component.html',
  styleUrl: './nopatologico-list.component.css'
})
export default class NopatologicoListComponent implements OnInit {
  antecedentes: any = [];
  data: any = [];
  bandera = false;
  codigoelegido;
  mensaje;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private antnopatologicoService: AntnopatologicoService,
    private antnopatologicocitaService: AntnopatologicocitaService,
  ) { }

  getrelacionconcita(codigo) {
    this.antnopatologicocitaService.getfordelete(codigo).subscribe(
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
        this.toastr.error('Error API get antecedente no patoligico - cita');
      }
    );
  }

  deletedata(codigo) {
    if (this.bandera === true) {
      setTimeout(
        () => {
          for (const item of this.data) {
            const parametro = item.id;
            this.antnopatologicocitaService.deleteAntNoPatologicoCita(parametro).subscribe(
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
          this.antnopatologicoService.deleteAntNoPatologico(codigo).subscribe(
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
          this.antnopatologicoService.deleteAntNoPatologico(codigo).subscribe(
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
    this.antnopatologicoService.getAntNoPatologicos().subscribe(
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
        'antecedente2',
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
        'antecedente2',
        'update',
        codigoaeditar
      ]
    );
  }

}
