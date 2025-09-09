import { Component } from '@angular/core';

@Component({
  selector: 'app-patologico-update',
  standalone: true,
  imports: [],
  templateUrl: './patologico-update.component.html',
  styleUrl: './patologico-update.component.css'
})
export default class PatologicoUpdateComponent implements OnInit {
  antecedente: AntPatologico = {
    id: 0,
    Name: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private antpatologicoService: AntpatologicoService,
  ) { }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.antpatologicoService.getAntPatologico(params.id).subscribe(
        res => {
          console.log(res);
          this.antecedente = res;
        },
        err => {
          this.toastr.error('Datos no obtenidos');
        }
      );
    }
  }
  updateAntecedente() {
    const params = this.activatedRoute.snapshot.params;
    console.log(this.antecedente);
    // llamando a servicio de creacion que esta enlazada con el api
    this.antpatologicoService.updateAntPatologico(params.id, this.antecedente).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'antecedente3',
            'list'
          ]
        );
        this.toastr.success('Nuevo antecedente creado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo antecedente');
      }
    );
  }

}

