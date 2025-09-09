import { Component } from '@angular/core';

@Component({
  selector: 'app-laboratorio-list',
  standalone: true,
  imports: [],
  templateUrl: './laboratorio-list.component.html',
  styleUrl: './laboratorio-list.component.css'
})
export default class LaboratorioListComponent implements OnInit {
  laboratorios: any = [];
  tipos: any = [];
  bandera = false;
  tipo: Tipo = {
    id: 0,
    Name: ''
  };
  mensaje;
  codigotipo;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private tipoService: TipoService,
    private laboratorioService: LaboratorioService
  ) { }

  ngOnInit(): void {
    // this.getlaboratorios();
    this.gettipos();
  }
  gettipos() {
    this.tipoService.getTipos().subscribe(
      res => {
        this.tipos = res;
      }, err => {
        this.toastr.error('Error Api tipo');
      }
    );
  }
  ver(codigo) {
    const parametro = codigo;
    this.laboratorioService.getLaboratorioTipo(parametro).subscribe(
      res => {
        this.laboratorios = res;
      },
      err => console.error(err)
    );
  }
  updateTipo() {
    // llamando a laboratorio de creacion que esta enlazada con el api
    this.tipoService.updateTipo(this.codigotipo, this.tipo).subscribe(
      res => {
        console.log(res);
        this.mensaje = res;
        this.toastr.success('Tipo actualizado');
        this.bandera = false;
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo actualizar tipo');
      }
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'laboratorio',
        'create'
      ]
    );
  }
  edit(codigo) {
    this.bandera = true;
    this.codigotipo = codigo;
    this.tipoService.getTipo(codigo).subscribe(
      res => {
        this.tipo = res;
      }, err => {
        this.toastr.error('Error api tipo get');
      }
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar Tipo');
    this.router.navigate(
      [
        'admin',
        'laboratorio',
        'update',
        codigoaeditar
      ]
    );
  }
  delete(codigo) {
    this.tipoService.deleteTipo(codigo).subscribe(
      res => {
        this.mensaje = res;
        this.router.navigate(
          [
            'admin',
            'laboratorio',
            'list'
          ]
        );
      }
    );
    window.location.reload();
  }
  vitales() {
    this.toastr.info('Registrando funsiones vitales');
  }
}

