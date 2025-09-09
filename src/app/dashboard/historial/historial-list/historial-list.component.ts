import { Component } from '@angular/core';

@Component({
  selector: 'app-historial-list',
  standalone: true,
  imports: [],
  templateUrl: './historial-list.component.html',
  styleUrl: './historial-list.component.css'
})
export default class HistorialListComponent implements OnInit {
  historiales: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private historialService: HistorialService
  ) { }

  ngOnInit(): void {
    this.gethistorials();
  }

  // tslint:disable-next-line: typedef
  gethistorials() {
    this.historialService.getHistorials().subscribe(
      res => {
        this.historiales = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'historial',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar historial');
    this.router.navigate(
      [
        'admin',
        'historial',
        'update',
        codigoaeditar
      ]
    );
  }
}
