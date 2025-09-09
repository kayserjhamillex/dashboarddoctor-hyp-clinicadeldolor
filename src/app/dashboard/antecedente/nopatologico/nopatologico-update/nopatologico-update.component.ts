import { Component } from '@angular/core';

@Component({
  selector: 'app-nopatologico-update',
  standalone: true,
  imports: [],
  templateUrl: './nopatologico-update.component.html',
  styleUrl: './nopatologico-update.component.css'
})
export default class NopatologicoUpdateComponent implements OnInit {
  antecedente: AntNoPatologico = {
    id: 0,
    Name: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private antnopatologicoService: AntnopatologicoService,
  ) { }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.antnopatologicoService.getAntNoPatologico(params.id).subscribe(
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
    this.antnopatologicoService.updateAntNoPatologico(params.id, this.antecedente).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'antecedente2',
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

