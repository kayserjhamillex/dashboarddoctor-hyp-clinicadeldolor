import { Component } from '@angular/core';

@Component({
  selector: 'app-horario-create',
  standalone: true,
  imports: [],
  templateUrl: './horario-create.component.html',
  styleUrl: './horario-create.component.css'
})
export default class HorarioCreateComponent implements OnInit {
  dia: '';
  data = {
    inicio: 1,
    fin: 15,
    dia: '',
    especialista: 0
  };
  horario: ListHorario = {
    id: 0,
    Day: '',
    EspecialistaId: 0,
    HoraId: 0,
  };
  horario1: ListHorario = {
    id: 0,
    Day: '',
    EspecialistaId: 0,
    HoraId: 0,
  };
  horas: any = [];
  especialistas: any = [];
  previo: any = [];
  codigoinicio;
  codigofin;
  numeros: any = [];
  dias = [
    {
      id: 1,
      name: 'lunes'
    },
    {
      id: 2,
      name: 'martes'
    },
    {
      id: 3,
      name: 'miercoles'
    },
    {
      id: 4,
      name: 'jueves'
    },
    {
      id: 5,
      name: 'viernes'
    },
    {
      id: 6,
      name: 'sabado'
    },
    {
      id: 7,
      name: 'domingo'
    },
  ];
  intervalos: any = [15,20,30];
  bandera = 'proceso1';
  miniproceso = 'nada';
  mostrartabla = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private horaService: HoraService,
    private especialistaService: EspecialistaService,
    private horarioService: HorarioService,
  ) { }
  intervalo(valor) {
    const parametro = this.intervalos[valor].toString();
    this.horaService.getHoraFilter(parametro).subscribe(
      res => {
        this.horas = res;
        this.toastr.success('Horas en el invervalo elegido');
        this.bandera = 'proceso2';
        this.miniproceso = 'inicio';
      },
      err => {
        console.error(err);
        this.toastr.success('Error en el invervalo elegido');
      }
    );
  }
  inicio(valor) {
    this.data.inicio = valor;
    this.miniproceso = 'fin';
  }
  final(valor) {
    this.data.fin = valor;
    this.miniproceso = 'nada';
    this.bandera = 'proceso3';
  }
  getEspecialistas() {
    this.especialistaService.getEspecialistas().subscribe(
      res => {
        this.especialistas = res;
      },
      err => console.error(err)
    );
  }
  rango() {
    const inicio = this.data.inicio;
    const fin = this.data.fin + 1;
    const alv: any = [];
    for (let counter = inicio; counter < fin; counter++){
      alv.push(counter);
      this.numeros = alv;
    }
    console.log(this.numeros);
  }

  elejir(codigo3) {
    this.bandera = 'proceso4';
    const codigo = codigo3;
    this.data.especialista = codigo;
    this.horario.EspecialistaId = codigo;
  }
  diaelegido(name) {
    const wasa = {
      Day: '',
      EspecialistaId: 0,
      HoraId: 0,
    };
    this.data.dia = name;
    const diaelegido = name;
    this.horario.Day = diaelegido;
    wasa.Day = this.data.dia;
    wasa.EspecialistaId = this.data.especialista;
    console.log(this.numeros);
    const array = this.numeros;
    const vista: any = [];
    for (const obj of array) {
      // console.log(obj);
      wasa.HoraId = obj;
      console.log(wasa);
      this.horarioService.saveHorario(wasa).subscribe(
        res => {
          console.log(res);
          // vista.push(res);
          // this.previo = vista;
        },
        err => {
          console.log(err);
        }
      );
    }
    this.horarioService.getHorarioEspecialidaddDia(this.data.dia, this.data.especialista.toString()).subscribe(
      respreview => {
        this.previo = respreview;
        this.toastr.success('Horario creado del dia elegido');
        this.toastr.info('Procedemos a crear otro horario o finalizar');
      }, err => {
        console.log(err);
      }
    );
    this.bandera = 'proceso1';
    this.mostrartabla = true;
    console.log(this.previo);
  }
  limpiar() {
    this.previo = [];
    this.mostrartabla = false;
  }
  finish() {
    this.router.navigate(
      [
        'admin',
        'horario',
        'list'
      ]
    );
  }
  ngOnInit(): void {
    this.getEspecialistas();
    this.rango();
  }

}

