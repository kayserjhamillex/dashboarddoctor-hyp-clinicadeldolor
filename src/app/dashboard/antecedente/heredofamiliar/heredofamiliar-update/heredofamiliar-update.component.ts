import { Component } from '@angular/core';

@Component({
  selector: 'app-heredofamiliar-update',
  standalone: true,
  imports: [],
  templateUrl: './heredofamiliar-update.component.html',
  styleUrl: './heredofamiliar-update.component.css'
})
export default class HeredofamiliarUpdateComponent implements OnInit {
  antecedente: AntHeredoFamiliar = {
    id: 0,
    Name: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private antheredofamiliarService: AntheredofamiliarService,
  ) { }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.antheredofamiliarService.getAntHeredoFamiliar(params.id).subscribe(
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
    this.antheredofamiliarService.updateAntHeredoFamiliar(params.id, this.antecedente).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'antecedente1',
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
