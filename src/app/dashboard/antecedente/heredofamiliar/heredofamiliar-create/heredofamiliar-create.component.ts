import { Component } from '@angular/core';

@Component({
  selector: 'app-heredofamiliar-create',
  standalone: true,
  imports: [],
  templateUrl: './heredofamiliar-create.component.html',
  styleUrl: './heredofamiliar-create.component.css'
})
export default class HeredofamiliarCreateComponent implements OnInit {
  antecedente: AntHeredoFamiliar = {
    id: 0,
    Name: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private antheredofamiliarService: AntheredofamiliarService,
  ) { }
  saveAntecedente() {
    delete this.antecedente.id;
    console.log(this.antecedente);
    // llamando a servicio de creacion que esta enlazada con el api
    this.antheredofamiliarService.saveAntHeredoFamiliar(this.antecedente).subscribe(
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
  ngOnInit(): void {
  }

}
