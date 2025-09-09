import { Component } from '@angular/core';

@Component({
  selector: 'app-duracion-update',
  standalone: true,
  imports: [],
  templateUrl: './duracion-update.component.html',
  styleUrl: './duracion-update.component.css'
})
export default class DuracionUpdateComponent implements OnInit {
  duracion: Duracion = {
    id: 0,
    Name: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private duracionService: DuracionService,
  ) { }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.duracionService.getDuracion(params.id).subscribe(
        res => {
          console.log(res);
          this.duracion = res;
        },
        err => {
          this.toastr.error('Datos no obtenidos');
        }
      );
    }
  }
  updateDuracion() {
    const params = this.activatedRoute.snapshot.params;
    console.log(this.duracion);
    // llamando a servicio de creacion que esta enlazada con el api
    this.duracionService.updateDuracion(params.id, this.duracion).subscribe(
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

}

