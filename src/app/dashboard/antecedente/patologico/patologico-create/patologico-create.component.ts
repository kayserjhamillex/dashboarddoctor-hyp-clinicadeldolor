import { Component } from '@angular/core';

@Component({
  selector: 'app-patologico-create',
  standalone: true,
  imports: [],
  templateUrl: './patologico-create.component.html',
  styleUrl: './patologico-create.component.css'
})
export default class PatologicoCreateComponent implements OnInit {
  antecedente: AntPatologico = {
    id: 0,
    Name: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private antpatologicoService: AntpatologicoService,
  ) { }
  saveAntecedente() {
    delete this.antecedente.id;
    console.log(this.antecedente);
    // llamando a servicio de creacion que esta enlazada con el api
    this.antpatologicoService.saveAntPatologico(this.antecedente).subscribe(
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
  ngOnInit(): void {
  }

}

