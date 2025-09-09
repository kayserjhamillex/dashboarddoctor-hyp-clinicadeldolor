import { Component } from '@angular/core';

@Component({
  selector: 'app-subproceso5',
  standalone: true,
  imports: [],
  templateUrl: './subproceso5.component.html',
  styleUrl: './subproceso5.component.css'
})
export default class Subproceso5Component implements OnInit {
  reserva: ListCita = {
    id: 0,
    Appointment: new Date(),
    Reason: '',
    Amount: '',
    Pay: '',
    Paymentstatus: '',
    Type: 'normal',
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
  reservadetail: Cita = {
    id: 0,
    Appointment: new Date(),
    Pay: '',
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
  laboratoriodoscita: Laboratoriocita = {
    id: 0,
    Value: false,
    Location: '',
    Amount: '',
    Condition: '',
    CitaId: 0,
    LaboratoriodosId: 0,
    cita: {
      id: 0,
      LaboratoryExam: ''
    },
    laboratoriodos: {
      id: 0,
      Name: '',
      Price: 0,
      Plurality: '',
      TipodosId: 0,
      tipodos: {
        id: 0,
        Name: ''
      }
    }
  };
  ticket: any = this.reservadetail;
  elcodigo;
  mensaje;
  edad;
  name;
  lafecha;
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
    private tipoService: TipoService,
    private reservaService: CitaService,
    private tipodosService: TipodosService,
    private activatedRoute: ActivatedRoute,
    private global: FuncionesGlobalesService,
    private analisisService: AnalisisService,
    private resultadoService: ResultadoService,
    private laboratoriocitaService: LaboratoriodoscitaService
  ) { }
  gettipos1() {
    this.tipoService.getTipos().subscribe(
      res => {
        this.tipos1 = res;
      }, err => {
        this.toastr.error('Error get tipos 1');
      }
    );
  }
  gettipos2() {
    this.tipodosService.getTipodoss().subscribe(
      res => {
        this.tipos2 = res;
      }, err => {
        this.toastr.error('Error get tipos 2');
      }
    );
  }
  selecttype1(par) {
    const parametro =  par;
    const array: any = this.analisis;
    const array2: any = [];
    for (const item of array) {
      const valor = item.laboratorio.TipoId;
      if (valor === parametro) {
        array2.push(item);
        this.analisisfiltrado = array2;
      }
    }
    console.log(this.analisisfiltrado);
  }
  selecttype2(par, par2) {
    this.name = par2;
    const parametro =  par;
    if (parametro === 1) {
      this.mostrar = true;
    } else {
      this.mostrar = false;
    }
    const array: any = this.rxtmrm;
    const array2: any = [];
    for (const item of array) {
      const valor = item.laboratoriodos.TipodosId;
      if (valor === parametro) {
        array2.push(item);
        this.rxtmrmfiltrado = array2;
      }
    }
    console.log(this.rxtmrmfiltrado);
  }
  onchangeselect1(par) {
    this.analisisService.getAnalisis(par).subscribe(
      resget => {
        this.elanalisis = resget;
        const valor = !this.elanalisis.Value;
        if (valor === true) {
          this.elanalisis.Condition = 'obtener';
        } else {
          this.elanalisis.Condition = 'asignado';
        }
        // tslint:disable-next-line: no-unused-expression
        this.elanalisis.Value = valor;
        this.analisisService.updateAnalisis(par, this.elanalisis).subscribe(
          resupdate => {
            this.mensaje = resupdate;
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
          }, err => {
            this.toastr.error('Error update one analisis cita');
          }
        );
      }, err => {
        this.toastr.error('Error get one analisis cita');
      }
    );
  }
  onchangeselect2(par) {
    this.laboratoriocitaService.getLaboratoriocita(par).subscribe(
      resget => {
        this.ellaboratorio = resget;
        this.laboratoriodoscita = resget;
        const parametrito = this.laboratoriodoscita.laboratoriodos.TipodosId;
        const valor = !this.ellaboratorio.Value;
        if (valor === true) {
          this.ellaboratorio.Condition = 'obtener';
        } else {
          this.ellaboratorio.Condition = 'asignado';
        }
        // tslint:disable-next-line: no-unused-expression
        this.ellaboratorio.Value = valor;
        if (parametrito > 1) {
          this.laboratoriocitaService.updateLaboratoriocita(par, this.ellaboratorio).subscribe(
            resupdate => {
              this.mensaje = resupdate;
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
            }, err => {
              this.toastr.error('Error update one rxtmrm cita');
            }
          );
        }
      }, err => {
        this.toastr.error('Error get one rxtmrm cita');
      }
    );
  }
  onOptionsSelected(event) {
    const value = event.target.value;
    this.ellaboratorio.Location = value;
    console.log(value);
  }
  updaterxtmrm(par) {
    this.laboratoriocitaService.updateLaboratoriocita(par, this.ellaboratorio).subscribe(
      resupdate => {
        this.mensaje = resupdate;
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
            console.log(this.rxtmrmseleccioanados);
          }, err => {
            this.toastr.error('Error get all analisis rx-tm-rm');
          }
        );
      }, err => {
        this.toastr.error('Error update one rxtmrm cita');
      }
    );
  }
  etswey() {
    const valor = !this.reserva.ETS;
    this.reserva.ETS = valor;
  }
  ngOnInit(): void {
    this.gettipos1();
    this.gettipos2();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.reservaService.getCita(params.id).subscribe(
        res => {
          this.reserva = res;
          this.ticket = res;
          const fechita = new Date(this.reserva.Appointment);
          this.lafecha = fechita.toISOString().split('T')[0];
          const codigo = this.ticket.id;
          this.edad = this.global.getedad(this.ticket.cliente.BirthDate);
          this.elcodigo = codigo;
          console.log(this.elcodigo);
          this.toastr.success('historia del paciente');
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
            this.resultadoService.getResultadoCita(codigo).subscribe(
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
        },
        err => {
          this.toastr.error('Error api get cita historia');
        }
      );
    }
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
        'proceso1',
        'subproceso3',
        codigo
      ]
    );
  }
}

