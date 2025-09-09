import { Component } from '@angular/core';

@Component({
  selector: 'app-tratamiento-list',
  standalone: true,
  imports: [],
  templateUrl: './tratamiento-list.component.html',
  styleUrl: './tratamiento-list.component.css'
})
export default class TratamientoListComponent implements OnInit {
  tratamientos: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private tratamientoService: TratamientoService
  ) { }

  ngOnInit(): void {
    this.gettratamientos();
  }

  // tslint:disable-next-line: typedef
  gettratamientos() {
    this.tratamientoService.getTratamientos().subscribe(
      res => {
        this.tratamientos = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'tratamiento',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar tratamiento');
    this.router.navigate(
      [
        'admin',
        'tratamiento',
        'update',
        codigoaeditar
      ]
    );
  }
}

