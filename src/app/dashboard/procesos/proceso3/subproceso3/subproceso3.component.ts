import { Component } from '@angular/core';

@Component({
  selector: 'app-subproceso3',
  standalone: true,
  imports: [],
  templateUrl: './subproceso3.component.html',
  styleUrl: './subproceso3.component.css'
})
export default class Subproceso3Component implements OnInit {
  duracion: Duracion = {
    Name: ''
  };
  duracion1: Duracion = {
    id: 0,
    Name: ''
  };
  antecedentehf: AntHeredoFamiliar = {
    Name: ''
  };
  antecedentep: AntPatologico = {
    Name: ''
  };
  antecedentehf1: AntHeredoFamiliar = {
    id: 0,
    Name: ''
  };
  antecedentep1: AntPatologico = {
    id: 0,
    Name: ''
  };
  edad;
  elcodigo;
  mensaje;
  mensaje1;
  mensaje2;
  mensaje3;
  mensaje4;
  mensaje5;
  mensaje6;
  bandera = false;
  bannderaatras = false;
  codigocita;
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
  reserva: ListCita = {
    id: 0,
    Appointment: new Date(),
    Reason: '',
    Amount: '',
    Pay: '',
    Paymentstatus: '',
    Type: '',
    Condition: '',
    Referred: '',
    Companion: '',
    Relationship: '',
    BloodPressure: '',
    HeartRate: '',
    BreathingFrequency: '',
    Temperature: '',
    Saturation: '',
    SickTime: '',
    CurrentEpisode: '',
    StartWay: '',
    SignsandSymptoms: '',
    DescriptionProblem: '',
    SurgicalHistory: '',
    MedicalHistory: '',
    AllergicHistory: '',
    PhysicalExam: '',
    Diagnosis: '',
    LaboratoryExam: '',
    Creatininevalue: '',
    Urea: '',
    ETS: false,
    Specifyothers: '',
    Labamount: '',
    Labpay: '',
    Labpaymentstatus: '',
    Labstatus: '',
    AdminId: 0,
    ClienteId: 0,
    HorarioId: 0
  };
  detallecita: ListDetalleCita = {
    id: 0,
    Othersduration: '',
    Startdate: new Date(),
    Frequency: '',
    Datethatbecameimportant: new Date(),
    Perday: '',
    Perweek: '',
    Permonth: '',
    Byyear: '',
    One: false,
    Two: false,
    Three: false,
    Multiple: false,
    Unilateral: false,
    Bilateral: false,
    Symmetrical: false,
    Referred: false,
    Irradiated: false,
    Worsened: false,
    Parked: false,
    Decreasing: false,
    Scale: '',
    Datescale: new Date(),
    Oncological: false,
    Oncologicaltype: '',
    AssociatedwithDiagnosis: false,
    AssociatedwithTreatment: false,
    AssociatedwithProgressiveCancer: false,
    Addictions: false,
    Dying: false,
    Treatment: '',
    Observations: '',
    Protocol: false,
    Protocoltype: '',
    CitaId: 0
  };
  frontbody: ListDermatomaFrontal = {
    id: 0,
    DFC1: false,
    DFC21: false,
    DFC22: false,
    DFC3: false,
    DFC4: false,
    DFC51: false,
    DFC52: false,
    DFC61: false,
    DFC62: false,
    DFC71: false,
    DFC72: false,
    DFC81: false,
    DFC82: false,
    DFD101: false,
    DFD102: false,
    DFD103: false,
    DFD2: false,
    DFD3: false,
    DFD4: false,
    DFD5: false,
    DFD6: false,
    DFD7: false,
    DFD8: false,
    DFD9: false,
    DFD10: false,
    DFD11: false,
    DFD12: false,
    DFL1: false,
    DFL21: false,
    DFL22: false,
    DFL31: false,
    DFL32: false,
    DFL41: false,
    DFL42: false,
    DFL51: false,
    DFL52: false,
    DFS11: false,
    DFS12: false,
    DFS2: false,
    DFS3: false,
    CitaId: 0
  };
  endbody: ListDermatomaPosterior = {
    id: 0,
    DDC2: false,
    DDC3: false,
    DDC4: false,
    DDC51: false,
    DDC52: false,
    DDC53: false,
    DDC61: false,
    DDC62: false,
    DDC63: false,
    DDC71: false,
    DDC72: false,
    DDC73: false,
    DDC81: false,
    DDC82: false,
    DDC83: false,
    DDD101: false,
    DDD102: false,
    DDD103: false,
    DDD2: false,
    DDD3: false,
    DDD4: false,
    DDD5: false,
    DDD6: false,
    DDD7: false,
    DDD8: false,
    DDD9: false,
    DDD10: false,
    DDD11: false,
    DDD12: false,
    DDL1: false,
    DDL2: false,
    DDL31: false,
    DDL32: false,
    DDL41: false,
    DDL42: false,
    DDL51: false,
    DDL52: false,
    DDL53: false,
    DDL54: false,
    DDS11: false,
    DDS12: false,
    DDS13: false,
    DDS14: false,
    DDS21: false,
    DDS22: false,
    DDS3: false,
    DDS4: false,
    DDS5: false,
    CitaId: 0
  };
  entrevista: ListExamenCita = {
    id: 0,
    Burning: false,
    Painfulcoldsensation: false,
    Electricshocks: false,
    Tingle: false,
    Sensationofpinsandneedles: false,
    Numbness: false,
    Itch: false,
    Hypoaesthesiatotouch: false,
    Hypoaesthesiatopunctures: false,
    Brushed: false,
    Fecha: new Date(),
    Punctuacion: '',
    DetallecitaId: 0
  };
  reservadetail: Cita = {
    id: 0,
    Appointment: new Date(),
    Reason: '',
    Amount: '',
    Pay: '',
    Paymentstatus: '',
    Type: '',
    Condition: '',
    Referred: '',
    Companion: '',
    Relationship: '',
    BloodPressure: '',
    HeartRate: '',
    BreathingFrequency: '',
    Temperature: '',
    Saturation: '',
    SickTime: '',
    CurrentEpisode: '',
    StartWay: '',
    SignsandSymptoms: '',
    DescriptionProblem: '',
    SurgicalHistory: '',
    MedicalHistory: '',
    AllergicHistory: '',
    PhysicalExam: '',
    Diagnosis: '',
    LaboratoryExam: '',
    Creatininevalue: '',
    Urea: '',
    ETS: false,
    Specifyothers: '',
    Labamount: '',
    Labpay: '',
    Labpaymentstatus: '',
    Labstatus: '',
    AdminId: 0,
    ClienteId: 0,
    HorarioId: 0,
    admin: {
      id: 0,
      Name: '',
      LastName: '',
      Phone: '',
      Email: '',
      Photo: ''
    },
    cliente: {
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
      Photo: ''
    },
    horario: {
      id: 0,
      Day: '',
      Cupo: 0,
      EspecialistaId: 0,
      HoraId: 0,
      especialista: {
        id: 0,
        Turn: '',
        EspecialidadId: 0,
        DoctorId: 0,
        especialidad: {
          id: 0,
          Name: '',
          Price: 0
        },
        doctor: {
          id: 0,
          Name: '',
          LastName: '',
          Email: '',
        },
      },
      hora: {
        id: 0,
        Turn: '',
        Interval: '',
        Start: '',
        End: ''
      }
    }
  };
  genero: Genero [] = [
    {
      id: 1,
      name: 'Izquierda'
    },
    {
      id: 2,
      name: 'Derecha'
    },
    {
      id: 3,
      name: 'Ambos'
    }
  ];
  elanalisis: Analisis = {
    id: 0,
    Value: false,
    Condition: '',
    CitaId: 0,
    LaboratorioId: 0
  };
  ellaboratorio: ListLaboratoriocita = {
    id: 0,
    Value: false,
    Location: '',
    Amount: '',
    Condition: '',
    CitaId: 0,
    LaboratoriodosId: 0
  };
  ticket: any = this.reservadetail;
  duraciones: any = [];
  frecuencias: any = [];
  antheredofamiliars: any = [];
  antnopatologicos: any = [];
  antpatologicos: any = [];
  clienteant1elegidos: any = [];
  clienteant2elegidos: any = [];
  clienteant3elegidos: any = [];
  citaelegidosduracion: any = [];
  citaelegidosfrecuencia: any = [];
  name;
  codigodetallecita;
  mostrar = false;
  tipos1: any = [];
  tipos2: any = [];
  analisis: any = [];
  rxtmrm: any = [];
  analisisfiltrado: any = [];
  rxtmrmfiltrado: any = [];
  analisisseleccioanados: any = [];
  rxtmrmseleccioanados: any = [];
  resultadosdeanalisis: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private reservaService: CitaService,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private global: FuncionesGlobalesService,
    private analisisService: AnalisisService,
    private duracioncitaService: DuracioncitaService,
    private examenpacienteService: ExamencitaService,
    private detallecitaService: DetallecitacitaService,
    private frecuenciacitaService: FrecuenciacitaService,
    private dermatomafrontalService: DermatomafrontalService,
    private laboratoriocitaService: LaboratoriodoscitaService,
    private antpatologicocitaService: AntpatologicocitaService,
    private dermatomaposteriorService: DermatomaposteriorService,
    private antnopatologicocitaService: AntnopatologicocitaService,
    private antheredofamiliarcitaService: AntheredofamiliarcitaService,
  ) { }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.codigocita = params.id;
    this.reservaService.getCita(this.codigocita).subscribe(
      rescita => {
        this.reserva = rescita;
        this.ticket = rescita;
        this.clienteService.getClienteHistoria(this.reserva.ClienteId).subscribe(
          rescliente => {
            this.cliente = rescliente;
            this.edad = this.global.getedad(this.cliente.BirthDate);
          }, error => {
            this.toastr.error('Error optencion de datos');
          }
        );
        this.antpatologicocitaService.getAntPatologicoesCita(this.reserva.ClienteId).subscribe(
          resant1 => {
            this.clienteant1elegidos = resant1;
          }, err => {
            this.toastr.error('Error api get antecedente1 cita');
          }
        );
        this.antnopatologicocitaService.getAntNoPatologicoesCita(this.reserva.ClienteId).subscribe(
          resant2 => {
            this.clienteant2elegidos = resant2;
          }, err => {
            this.toastr.error('Error api get antecedente2 cita');
          }
        );
        this.antheredofamiliarcitaService.getAntHeredoFamiliaresCita(this.reserva.ClienteId).subscribe(
          resant3 => {
            this.clienteant3elegidos = resant3;
          }, err => {
            this.toastr.error('Error api get antecedente3 cita');
          }
        );
        const codigo = this.ticket.id;
        this.elcodigo = codigo;
        // console.log(this.elcodigo);
        this.analisisService.getAnalisisCita(this.elcodigo).subscribe(
          resanalisis => {
            this.analisis = resanalisis;
            const seleccionados: any = [];
            for (const item of this.analisis) {
              if (item.Value === true) {
                seleccionados.push(item);
                this.analisisseleccioanados = seleccionados;
              }
            }
          }, err => {
            this.toastr.error('Error get all analisis cita');
          }
        );
        this.laboratoriocitaService.getLaboratoriocitaCita(this.elcodigo).subscribe(
          reslaboratorio => {
            this.rxtmrm = reslaboratorio;
            const seleccionados: any = [];
            for (const item of this.rxtmrm) {
              if (item.Value === true) {
                seleccionados.push(item);
                this.rxtmrmseleccioanados = seleccionados;
              }
            }
          }, err => {
            this.toastr.error('Error get all analisis rx-tm-rm');
          }
        );
        // tslint:disable-next-line: max-line-length
        if (this.reserva.Labstatus === 'resultado' && this.reserva.Labpaymentstatus === 'pagado' && this.reserva.Condition === 'atendido') {
          this.analisisService.getAnalisisLab(codigo).subscribe(
            resultados => {
              if (Object.entries(resultados).length > 0) {
                this.resultadosdeanalisis = resultados;
                this.toastr.info('Resultados');
              }
            }, error => {
              this.toastr.error('Error api get analisis cita resultado');
            }
          );
        }
        this.toastr.success('Historia del Dolor del paciente');
        const estado = this.reserva.Type;
        if (estado === 'medicina del dolor') {
          this.examenpacienteService.getExamenCitaCita(this.codigocita).subscribe(
            resex => {
              this.entrevista = resex;
            }, err => {
              this.toastr.error('Error api get examen cita');
            }
          );
          this.detallecitaService.getDetalleCitaCita(this.codigocita).subscribe(
            resdetallecita => {
              this.detallecita = resdetallecita;
              this.frecuenciacitaService.getFrecuenciasCita(this.codigocita).subscribe(
                resfre => {
                  this.citaelegidosfrecuencia = resfre;
                }, err => {
                  this.toastr.error('Error api get frecuencia cita');
                }
              );
              this.duracioncitaService.getDuracionesCita(this.codigocita).subscribe(
                resdu => {
                  this.citaelegidosduracion = resdu;
                }, err => {
                  this.toastr.error('Error api get duracion cita');
                }
              );
            },
            err => {
              this.toastr.error('Error Api GET detalle cita');
            }
          );
          this.dermatomafrontalService.getDermatomafrontalCita(this.codigocita).subscribe(
            resfrontal => {
              this.frontbody = resfrontal;
            },
            err => {
              this.toastr.error('Error Api GET detalle cita');
            }
          );
          this.dermatomaposteriorService.getDermatomaposteriorCita(this.codigocita).subscribe(
            resposterior => {
              this.endbody = resposterior;
            },
            err => {
              this.toastr.error('Error Api GET detalle cita');
            }
          );
        }
        if (estado === 'procedimiento') {
          this.detallecitaService.getDetalleCitaCita(this.codigocita).subscribe(
            resdetallecita => {
              this.detallecita = resdetallecita;
            },
            err => {
              this.toastr.error('Error Api GET detalle cita');
            }
          );
        }
        if (estado === 'normal') {
          this.router.navigate(
            [
              'admin',
              'home'
            ]
          );
        }
      },
      err => {
        this.toastr.error('Error Api GET cita');
      }
    );
  }
  atras() {
    this.router.navigate(
      [
        'admin',
        'home'
      ]
    );
  }
  editarhistoria() {
    const codigo = this.elcodigo;
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
  registrar() {
    console.log(this.citaelegidosfrecuencia);
    console.log(this.citaelegidosduracion);
    console.log(this.rxtmrmseleccioanados);
  }
}
