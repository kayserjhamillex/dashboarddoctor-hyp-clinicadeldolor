import { Component } from '@angular/core';

@Component({
  selector: 'app-nopatologico-create',
  standalone: true,
  imports: [],
  templateUrl: './nopatologico-create.component.html',
  styleUrl: './nopatologico-create.component.css'
})
export default class NopatologicoCreateComponent implements OnInit {
  antecedente: AntNoPatologico = {
    id: 0,
    Name: ''
  };
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private antnopatologicoService: AntnopatologicoService,
  ) { }
  saveAntecedente() {
    delete this.antecedente.id;
    console.log(this.antecedente);
    // llamando a servicio de creacion que esta enlazada con el api
    this.antnopatologicoService.saveAntNoPatologico(this.antecedente).subscribe(
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
  ngOnInit(): void {
  }

}
