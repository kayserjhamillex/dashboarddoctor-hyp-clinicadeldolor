import { Component } from '@angular/core';

@Component({
  selector: 'app-subproceso1',
  standalone: true,
  imports: [],
  templateUrl: './subproceso1.component.html',
  styleUrl: './subproceso1.component.css'
})
export default class Subproceso1Component implements OnInit {
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
  push = false;
  codigosolitario;
  historial: any = [];
  clienteant1elegidos: any = [];
  clienteant2elegidos: any = [];
  clienteant3elegidos: any = [];
  FechaActual = new Date();
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: CitaService,
    private clienteService: ClienteService,
    private global: FuncionesGlobalesService,
    private especialistaService: EspecialistaService,
    private antpatologicocitaService: AntpatologicocitaService,
    private antnopatologicocitaService: AntnopatologicocitaService,
    private antheredofamiliarcitaService: AntheredofamiliarcitaService,
  ) { }
  // tslint:disable-next-line: typedef
  searchEmailCliente() {
    this.clienteService.getClientecorreo(this.dato).subscribe(
      res => {
        this.cliente = res;
        this.codigocliente = this.cliente.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        this.edad = this.global.getedad(this.cliente.BirthDate);
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
  // tslint:disable-next-line: typedef
  searchDocCliente() {
    this.clienteService.getClientedoc(this.dato).subscribe(
      res => {
        this.cliente = res;
        this.codigocliente = this.cliente.id;
        this.toastr.success('Cliente encontrado');
        this.dato = '';
        this.edad = this.global.getedad(this.cliente.BirthDate);
      },
      err => {
        this.toastr.error('no se pudo encotrar cliente');
      }
    );
  }
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
    this.doctor = JSON.parse(localStorage.getItem('doctor'));
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
  }

  unahistoria() {
    const parametro1 = this.codigocliente;
    const parametro2 = this.codigosolitario;
    this.clienteService.getClienteHistoria(parametro1).subscribe(
      rescliente => {
        this.cliente = rescliente;
        this.push = true;
      }, err => {
        this.toastr.error('Error api get cliente historia');
      }
    );
    this.reservaService.getHistorial(parametro1, parametro2).subscribe(
      hist => {
        console.log(hist);
        if (Object.entries(hist).length > 0) {
          this.historial = hist;
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
          this.toastr.info('el historial del paciente');
        } else {
          this.toastr.info('Aun no hay atenciones del cliente');
        }
      }, err => {
        this.toastr.error('Error Api Historial');
      }
    );
  }

  historia(codigo) {
    const parametro1 = this.codigocliente;
    const parametro2 = codigo;
    this.clienteService.getClienteHistoria(parametro1).subscribe(
      rescliente => {
        this.cliente = rescliente;
        this.push = true;
      }, err => {
        this.toastr.error('Error api get cliente historia');
      }
    );
    this.reservaService.getHistorial(parametro1, parametro2).subscribe(
      hist => {
        console.log(hist);
        if (Object.entries(hist).length > 0) {
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
  editarhistoria(codigo) {
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso1',
        'subproceso3',
        codigo
      ]
    );
  }
  masdetalles(codigo) {
    this.router.navigate(
      [
        'admin',
        'procesos',
        'proceso1',
        'subproceso5',
        codigo
      ]
    );
  }
}
