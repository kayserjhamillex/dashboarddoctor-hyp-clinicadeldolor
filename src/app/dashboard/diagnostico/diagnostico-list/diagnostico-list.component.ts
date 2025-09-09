import { Component } from '@angular/core';

@Component({
  selector: 'app-diagnostico-list',
  standalone: true,
  imports: [],
  templateUrl: './diagnostico-list.component.html',
  styleUrl: './diagnostico-list.component.css'
})
export default class DiagnosticoListComponent implements OnInit {
  diagnosticos: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private diagnosticoService: DiagnosticoService
  ) { }

  ngOnInit(): void {
    this.getdiagnosticos();
  }

  // tslint:disable-next-line: typedef
  getdiagnosticos() {
    this.diagnosticoService.getDiagnosticos().subscribe(
      res => {
        this.diagnosticos = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'diagnostico',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar diagnostico');
    this.router.navigate(
      [
        'admin',
        'diagnostico',
        'update',
        codigoaeditar
      ]
    );
  }
}

