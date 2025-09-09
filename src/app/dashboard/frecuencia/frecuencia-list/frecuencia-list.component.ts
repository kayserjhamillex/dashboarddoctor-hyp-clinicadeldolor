import { Component } from '@angular/core';

@Component({
  selector: 'app-frecuencia-list',
  standalone: true,
  imports: [],
  templateUrl: './frecuencia-list.component.html',
  styleUrl: './frecuencia-list.component.css'
})
export default class FrecuenciaListComponent implements OnInit {
  frecuencia: Frecuencia = {
    id: 0,
    Name: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private frecuenciaService: FrecuenciaService,
  ) { }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.frecuenciaService.getFrecuencia(params.id).subscribe(
        res => {
          console.log(res);
          this.frecuencia = res;
        },
        err => {
          this.toastr.error('Datos no obtenidos');
        }
      );
    }
  }
  updateFrecuencia() {
    const params = this.activatedRoute.snapshot.params;
    console.log(this.frecuencia);
    // llamando a servicio de creacion que esta enlazada con el api
    this.frecuenciaService.updateFrecuencia(params.id, this.frecuencia).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'frecuencia',
            'list'
          ]
        );
        this.toastr.success('Nuevo frecuencia creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo frecuencia');
      }
    );
  }

}
