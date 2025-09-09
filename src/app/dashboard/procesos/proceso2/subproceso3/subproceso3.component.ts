import { Component } from '@angular/core';

@Component({
  selector: 'app-subproceso3',
  standalone: true,
  imports: [],
  templateUrl: './subproceso3.component.html',
  styleUrl: './subproceso3.component.css'
})
export default class Subproceso3Component implements OnInit {
  especialidades: any = [];
  cliente: Cliente = {
    id: 0,
    Name: '',
    LastName: '',
    BirthDate: new Date(),
    Job: '',
    Direction: '',
    Phone: '',
    Gender: '',
    CivilStatus: '',
    DocumentNumber: '',
    Email: '',
    Password: '',
    Photo: '',
    Google: '0',
    Condition: '',
    Code: '',
    G: '',
    P: '',
    A: '',
    C: '',
    Fum: new Date(),
    Papsmear: '',
    Bloodtype: '',
    Others: '',
    Othershereditary: '',
    Otherspathological: '',
    Medicine: ''
  };
  doctor: Doctor = {
    id: 0,
    Name: '',
    LastName: '',
    MedicalSchoolNumber: '',
    Email: '',
    Password: '',
    Photo: '',
    Code: '',
    Condition: ''
  };
  dato;
  edad;
  codigocliente;
  varios = false;
  codigosolitario;
  historial: any = [];
  clienteant1elegidos: any = [];
  clienteant2elegidos: any = [];
  clienteant3elegidos: any = [];
  FechaActual = new Date();
  push = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: CitaService,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private global: FuncionesGlobalesService,
    private especialistaService: EspecialistaService,
    private antpatologicocitaService: AntpatologicocitaService,
    private antnopatologicocitaService: AntnopatologicocitaService,
    private antheredofamiliarcitaService: AntheredofamiliarcitaService,
  ) { }
  editar() {
    const parametro = this.codigocliente;
    this.toastr.info('Editar Cliente');
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso1',
        'subproceso4',
        parametro
      ]
    );
  }
  ngOnInit(): void {
    const codigopaciente = this.activatedRoute.snapshot.params.id;
    this.doctor = JSON.parse(localStorage.getItem('doctor'));
    this.clienteService.getClienteHistoria(codigopaciente).subscribe(
      res => {
        this.cliente = res;
        this.codigocliente = this.cliente.id;
        this.toastr.success('Paciente encontrado');
        this.edad = this.global.getedad(this.cliente.BirthDate);
        const codigo = this.doctor.id;
        this.especialistaService.getEspecialistaFilterDoctor(codigo).subscribe(
          resespecialidades => {
            this.especialidades = resespecialidades;
            if (Object.entries(this.especialidades).length > 1) {
              this.toastr.info('Tiene mas de 1 especialidad');
              this.varios = true;
            } else {
              this.varios = false;
              this.toastr.info('Solo tiene una especialidad');
              this.codigosolitario = this.especialidades[0].EspecialidadId;
            }
          }, err => {
            this.toastr.error('Error Api especialista filter doctor');
          }
        );
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );

  }

  historia() {
    const parametro1 = this.codigocliente;
    this.antpatologicocitaService.getAntPatologicoesCita(parametro1).subscribe(
      resant1 => {
        this.clienteant1elegidos = resant1;
      }, err => {
        this.toastr.error('Error api get antecedente1 cita');
      }
    );
    this.antnopatologicocitaService.getAntNoPatologicoesCita(parametro1).subscribe(
      resant2 => {
        this.clienteant2elegidos = resant2;
      }, err => {
        this.toastr.error('Error api get antecedente2 cita');
      }
    );
    this.antheredofamiliarcitaService.getAntHeredoFamiliaresCita(parametro1).subscribe(
      resant3 => {
        this.clienteant3elegidos = resant3;
      }, err => {
        this.toastr.error('Error api get antecedente3 cita');
      }
    );
    this.reservaService.getHistorialDolor(parametro1).subscribe(
      hist => {
        console.log(hist);
        if (Object.entries(hist).length > 0) {
          this.push = true;
          this.historial = hist;
          this.toastr.info('el historial del paciente');
        } else {
          this.toastr.info('Aun no hay atenciones del cliente');
        }
      }, err => {
        this.toastr.error('Error Api Historial');
      }
    );
  }
  masdetalles(codigo) {
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso3',
        'subproceso3',
        codigo
      ]
    );
  }
  editarhistoria(codigo) {
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso3',
        'subproceso4',
        codigo
      ]
    );
  }
}
