import { Component } from '@angular/core';

@Component({
  selector: 'app-duracion-create',
  standalone: true,
  imports: [],
  templateUrl: './duracion-create.component.html',
  styleUrl: './duracion-create.component.css'
})
export default class DuracionCreateComponent implements OnInit {
  duracion: Duracion = {
    id: 0,
    Name: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private duracionService: DuracionService,
  ) { }
  saveDiagnostico() {
    delete this.duracion.id;
    console.log(this.duracion);
    // llamando a servicio de creacion que esta enlazada con el api
    this.duracionService.saveDuracion(this.duracion).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'duracion',
            'list'
          ]
        );
        this.toastr.success('Nuevo duracion creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo duracion');
      }
    );
  }
  ngOnInit(): void {
  }

}

