import { Component } from '@angular/core';

@Component({
  selector: 'app-heredofamiliar-list',
  standalone: true,
  imports: [],
  templateUrl: './heredofamiliar-list.component.html',
  styleUrl: './heredofamiliar-list.component.css'
})
export default class HeredofamiliarListComponent implements OnInit {
  antecedentes: any = [];
  data: any = [];
  bandera = false;
  codigoelegido;
  mensaje;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private antheredofamiliarService: AntheredofamiliarService,
    private antheredofamiliarcitaService: AntheredofamiliarcitaService,
  ) { }

  getrelacionconcita(codigo) {
    this.antheredofamiliarcitaService.getfordelete(codigo).subscribe(
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
        this.toastr.error('Error API get antecedente heredofamiliar - cita');
      }
    );
  }

  deletedata(codigo) {
    if (this.bandera === true) {
      setTimeout(
        () => {
          for (const item of this.data) {
            const parametro = item.id;
            this.antheredofamiliarcitaService.deleteAntHeredoFamiliarCita(parametro).subscribe(
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
          this.antheredofamiliarService.deleteAntHeredoFamiliar(codigo).subscribe(
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
          this.antheredofamiliarService.deleteAntHeredoFamiliar(codigo).subscribe(
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
    this.antheredofamiliarService.getAntHeredoFamiliars().subscribe(
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
        'antecedente1',
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
        'antecedente1',
        'update',
        codigoaeditar
      ]
    );
  }

}
