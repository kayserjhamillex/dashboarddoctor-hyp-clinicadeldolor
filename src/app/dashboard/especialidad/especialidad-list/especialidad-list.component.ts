import { Component } from '@angular/core';

@Component({
  selector: 'app-especialidad-list',
  standalone: true,
  imports: [],
  templateUrl: './especialidad-list.component.html',
  styleUrl: './especialidad-list.component.css'
})
export default class EspecialidadListComponent implements OnInit {
  especialidades: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private especialidadService: EspecialidadService
  ) { }

  ngOnInit(): void {
    this.getespecialidads();
  }
  getespecialidads() {
    this.especialidadService.getEspecialidads().subscribe(
      res => {
        this.especialidades = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'especialidad',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar especialidad');
    this.router.navigate(
      [
        'admin',
        'especialidad',
        'update',
        codigoaeditar
      ]
    );
  }

}

