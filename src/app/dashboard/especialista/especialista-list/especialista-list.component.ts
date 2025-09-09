import { Component } from '@angular/core';

@Component({
  selector: 'app-especialista-list',
  standalone: true,
  imports: [],
  templateUrl: './especialista-list.component.html',
  styleUrl: './especialista-list.component.css'
})
export default class EspecialistaListComponent implements OnInit {
  especialistas: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private especialistaService: EspecialistaService
  ) { }

  ngOnInit(): void {
    this.getespecialistas();
  }
  // tslint:disable-next-line: typedef
  getespecialistas() {
    this.especialistaService.getEspecialistas().subscribe(
      res => {
        this.especialistas = res;
      },
      err => {
        this.toastr.error('Error en la Api');
      }
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'especialista',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar especialista');
    this.router.navigate(
      [
        'admin',
        'especialista',
        'update',
        codigoaeditar
      ]
    );
  }

}

