import { Component } from '@angular/core';

@Component({
  selector: 'app-frecuencia-create',
  standalone: true,
  imports: [],
  templateUrl: './frecuencia-create.component.html',
  styleUrl: './frecuencia-create.component.css'
})
export default class FrecuenciaCreateComponent implements OnInit {
  frecuencia: Frecuencia = {
    id: 0,
    Name: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private frecuenciaService: FrecuenciaService,
  ) { }
  saveDiagnostico() {
    delete this.frecuencia.id;
    console.log(this.frecuencia);
    // llamando a servicio de creacion que esta enlazada con el api
    this.frecuenciaService.saveFrecuencia(this.frecuencia).subscribe(
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
  ngOnInit(): void {
  }

}

