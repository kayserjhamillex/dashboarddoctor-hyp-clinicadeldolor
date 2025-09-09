import { Component } from '@angular/core';

@Component({
  selector: 'app-subproceso2',
  standalone: true,
  imports: [],
  templateUrl: './subproceso2.component.html',
  styleUrl: './subproceso2.component.css'
})
export default class Subproceso2Component implements OnInit {
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
  tipoonco = [
    {
      id: 1,
      name: 'Agudo'
    },
    {
      id: 2,
      name: 'Crónico'
    },
    {
      id: 3,
      name: 'Sub-Agudo'
    },
    {
      id: 4,
      name: 'Crónico Agudizado'
    },
  ];
  elanalisis: Analisis = {
    Value: false,
    Condition: '',
    CitaId: 0,
    LaboratorioId: 0
  };
  elanalisis1: Analisis = {
    id: 0,
    Value: false,
    Condition: '',
    CitaId: 0,
    LaboratorioId: 0
  };
  elanalisisdetail: Analisisdetail = {
    id: 0,
    Value: false,
    Condition: '',
    CitaId: 0,
    LaboratorioId: 0,
    cita: {
      id: 0,
      LaboratoryExam: ''
    },
    laboratorio: {
      id: 0,
      Name: '',
      Price: 0,
      TipoId: 0,
      tipo: {
        id: 0,
        Name: ''
      }
    }
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
  duraciones: any = [];
  frecuencias: any = [];
  antheredofamiliars: any = [];
  antnopatologicos: any = [];
  antpatologicos: any = [];
  ant1elegidos: any = [];
  ant2elegidos: any = [];
  ant3elegidos: any = [];
  elegidosduracion: any = [];
  elegidosfrecuencia: any = [];
  clienteant1elegidos: any = [];
  clienteant2elegidos: any = [];
  clienteant3elegidos: any = [];
  citaelegidosduracion: any = [];
  citaelegidosfrecuencia: any = [];
  name;
  mostrar = false;
  tipos1: any = [];
  tipos2: any = [];
  analisis: any = [];
  rxtmrm: any = [];
  analisispedido: any = [];
  rxtmrmpedido: any = [];
  analisisfiltrado: any = [];
  rxtmrmfiltrado: any = [];
  analisisseleccioanados: any = [];
  rxtmrmseleccioanados: any = [];
  diagnosticos: any = [];
  resultadosdeanalisis: any = [];
  codigodetallecita;
  puntaje = 0;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private tipoService: TipoService,
    private reservaService: CitaService,
    private activatedRoute: ActivatedRoute,
    private tipodosService: TipodosService,
    private clienteService: ClienteService,
    private global: FuncionesGlobalesService,
    private duracionService: DuracionService,
    private analisisService: AnalisisService,
    private resultadoService: ResultadoService,
    private frecuenciaService: FrecuenciaService,
    private diagnosticoService: DiagnosticoService,
    private laboratorioService: LaboratorioService,
    private duracioncitaService: DuracioncitaService,
    private examenpacienteService: ExamencitaService,
    private antpatologicoService: AntpatologicoService,
    private detallecitaService: DetallecitacitaService,
    private laboratoriodosService: LaboratoriodosService,
    private frecuenciacitaService: FrecuenciacitaService,
    private antnopatologicoService: AntnopatologicoService,
    private dermatomafrontalService: DermatomafrontalService,
    private laboratoriocitaService: LaboratoriodoscitaService,
    private antheredofamiliarService: AntheredofamiliarService,
    private antpatologicocitaService: AntpatologicocitaService,
    private dermatomaposteriorService: DermatomaposteriorService,
    private antnopatologicocitaService: AntnopatologicocitaService,
    private antheredofamiliarcitaService: AntheredofamiliarcitaService,
  ) { }
  getdiagnosticos() {
    this.diagnosticoService.getDiagnosticos().subscribe(
      res => {
        this.diagnosticos = res;
      }, err => {
        this.toastr.error('Error api get diagnosticos');
      }
    );
  }
  onOptionsSelectedDiagn(event) {
    const value = event.target.value;
    this.reserva.Diagnosis = value;
    console.log(value);
  }
  onOptionsSelectedtipe(event) {
    const value = event.target.value;
    this.detallecita.Oncologicaltype = value;
  }
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
  getlaboratorio() {
    this.laboratorioService.getLaboratorios().subscribe(
      reslab => {
        this.analisis = reslab;
      }, err => {
        this.toastr.error('Error get lab data');
      }
    );
  }
  getlaboratoriodos() {
    this.laboratoriodosService.getLaboratorios().subscribe(
      reslabdos => {
        this.rxtmrm = reslabdos;
      }, err => {
        this.toastr.error('Error get labdos data');
      }
    );
  }
  selecttype1(par) {
    const parametro =  par;
    const array: any = this.analisis;
    const array2: any = [];
    for (const item of array) {
      const valor = item.TipoId;
      if (valor === parametro) {
        array2.push(item);
        this.analisisfiltrado = array2;
      }
    }
    console.log(this.analisisfiltrado);
  }
  onchangeselect6(par) {
    const lab = par;
    const citaa = this.reserva.id;
    this.analisisService.getAnalisisfiltro(citaa,lab).subscribe(
      resana => {
        if (resana === null) {
          this.elanalisis.CitaId = 1;
          this.elanalisis.Condition = 'obtener';
          this.elanalisis.LaboratorioId = par.id;
          this.elanalisis.Value = true;
          this.analisisService.saveAnalisis(this.elanalisis).subscribe(
            ressave => {
              this.elanalisis1 = ressave;
              const pago = +this.reserva.Labpay;
              const extra = +this.elanalisisdetail.laboratorio.Price;
              const aumento = pago + extra;
              this.reserva.Labpay = aumento.toString();
              this.reserva.Labpaymentstatus = 'por pagar';
              this.reserva.Labstatus = 'obtener';
              this.analisisService.getAnalisisCita(this.elcodigo).subscribe(
                resanalisis => {
                  this.analisispedido = resanalisis;
                  const seleccionados: any = [];
                  for (const item of this.analisispedido) {
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
        } else {
          this.elanalisis1 = resana;
          this.elanalisisdetail = resana;
          const valor = !this.elanalisis.Value;
          if (valor === true) {
            this.elanalisis1.Condition = 'obtener';
            const pago = +this.reserva.Labpay;
            const extra = +this.elanalisisdetail.laboratorio.Price;
            const aumento = pago + extra;
            this.reserva.Labpay = aumento.toString();
            this.reserva.Labpaymentstatus = 'por pagar';
            this.reserva.Labstatus = 'obtener';
          } else {
            this.elanalisis1.Condition = 'asignado';
            const pago = +this.reserva.Labpay;
            const extra = +this.elanalisisdetail.laboratorio.Price;
            const disminuye = pago - extra;
            this.reserva.Labpay = disminuye.toString();
            if (disminuye <= 0) {
              this.reserva.Labpay = '0';
              this.reserva.Labstatus = 'asignado';
              this.reserva.Labpaymentstatus = 'sin monto';
            }
          }
          this.elanalisis1.Value = valor;
          this.analisisService.updateAnalisis(par, this.elanalisis1).subscribe(
            resupdate => {
              this.mensaje = resupdate;
              this.analisisService.getAnalisisCita(this.elcodigo).subscribe(
                resanalisis => {
                  this.analisispedido = resanalisis;
                  const seleccionados: any = [];
                  for (const item of this.analisispedido) {
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
        }
      }, error => {
        this.toastr.error('Error get one analisis cita');
      }
    );
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
      const valor = item.TipodosId;
      if (valor === parametro) {
        array2.push(item);
        this.rxtmrmfiltrado = array2;
      }
    }
    console.log(this.rxtmrmfiltrado);
  }
  onchangeselect7(par) {
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

  onchangeselect(parametro) {
    let bandera = false;
    let ubicacion = 0;
    const array: any = this.ant1elegidos;
    if (Object.entries(array).length > 0) {
      for (const num of array) {
        if (num === parametro) {
          bandera = true;
          ubicacion = array.indexOf(parametro);
          array.splice(ubicacion, 1);
          this.ant1elegidos = array;
        }
      }
      if (bandera === false) {
        this.ant1elegidos.push(parametro);
      }
    } else {
      this.ant1elegidos.push(parametro);
    }
    console.log('antecedente1 ' + parametro);
  }
  onchangeselect2(parametro) {
    let bandera = false;
    let ubicacion = 0;
    const array: any = this.ant2elegidos;
    if (Object.entries(array).length > 0) {
      for (const num of array) {
        if (num === parametro) {
          bandera = true;
          ubicacion = array.indexOf(parametro);
          array.splice(ubicacion, 1);
          this.ant2elegidos = array;
        }
      }
      if (bandera === false) {
        this.ant2elegidos.push(parametro);
      }
    } else {
      this.ant2elegidos.push(parametro);
    }
  }
  onchangeselect3(parametro) {
    let bandera = false;
    let ubicacion = 0;
    const array: any = this.ant3elegidos;
    if (Object.entries(array).length > 0) {
      for (const num of array) {
        if (num === parametro) {
          bandera = true;
          ubicacion = array.indexOf(parametro);
          array.splice(ubicacion, 1);
          this.ant3elegidos = array;
        }
      }
      if (bandera === false) {
        this.ant3elegidos.push(parametro);
      }
    } else {
      this.ant3elegidos.push(parametro);
    }
  }
  onchangeselect4(parametro) {
    let bandera = false;
    let ubicacion = 0;
    const array: any = this.elegidosfrecuencia;
    if (Object.entries(array).length > 0) {
      for (const num of array) {
        if (num === parametro) {
          bandera = true;
          ubicacion = array.indexOf(parametro);
          array.splice(ubicacion, 1);
          this.elegidosfrecuencia = array;
        }
      }
      if (bandera === false) {
        this.elegidosfrecuencia.push(parametro);
      }
    } else {
      this.elegidosfrecuencia.push(parametro);
    }
  }
  onchangeselect5(parametro) {
    let bandera = false;
    let ubicacion = 0;
    const array: any = this.elegidosduracion;
    if (Object.entries(array).length > 0) {
      for (const num of array) {
        if (num === parametro) {
          bandera = true;
          ubicacion = array.indexOf(parametro);
          array.splice(ubicacion, 1);
          this.elegidosduracion = array;
        }
      }
      if (bandera === false) {
        this.elegidosduracion.push(parametro);
      }
    } else {
      this.elegidosduracion.push(parametro);
    }
  }
  getduraciones() {
    this.duracionService.getDuracions().subscribe(
      res => {
        this.duraciones = res;
      }, err => {
        this.toastr.error('Error Api Get Duraciones');
      }
    );
  }
  getfrecuencias() {
    this.frecuenciaService.getFrecuencias().subscribe(
      res => {
        this.frecuencias = res;
      }, err => {
        this.toastr.error('Error Api Get Frecuencias');
      }
    );
  }
  getantheredofamiliares() {
    this.antheredofamiliarService.getAntHeredoFamiliars().subscribe(
      res => {
        this.antheredofamiliars = res;
      }, err => {
        this.toastr.error('Error Api Get antecedentes heredofamiliares');
      }
    );
  }
  getantnopatologicos() {
    this.antnopatologicoService.getAntNoPatologicos().subscribe(
      res => {
        this.antnopatologicos = res;
      }, err => {
        this.toastr.error('Error Api Get antecedentes no patologicos');
      }
    );
  }
  getantpatologicos() {
    this.antpatologicoService.getAntPatologicos().subscribe(
      res => {
        this.antpatologicos = res;
      }, err => {
        this.toastr.error('Error Api Get antecedentes patologicos');
      }
    );
  }
  adelantef(par1: string, par2: boolean) {
    const objeto = this.frontbody;
    // tslint:disable-next-line: forin
    for (const key in objeto) {
      if (par1 === key) {
        this.frontbody[key] = par2;
      }
    }
  }
  atrasp(par1: string, par2: boolean) {
    const objeto = this.endbody;
    // tslint:disable-next-line: forin
    for (const key in objeto) {
      if (par1 === key) {
        this.endbody[key] = par2;
      }
    }
  }

  resultadoentrevista(check: boolean) {
    if (check === true) {
      this.puntaje++;
    } else {
      this.puntaje--;
    }
    if (this.puntaje < 0) {
      this.puntaje = 0;
    }
    if (this.puntaje > 10) {
      this.puntaje = 10;
    }
    this.entrevista.Punctuacion = this.puntaje.toString();
  }

  ngOnInit(): void {
    this.getdiagnosticos();
    this.gettipos1();
    this.gettipos2();
    this.getlaboratorio();
    this.getlaboratoriodos();
    this.getduraciones();
    this.getfrecuencias();
    this.getantheredofamiliares();
    this.getantnopatologicos();
    this.getantpatologicos();
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
        this.toastr.success('Historia del Dolor del Paciente');
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
  registrar() {
    console.log(this.rxtmrmseleccioanados);
    console.log(this.elegidosfrecuencia);
    console.log(this.elegidosduracion);
  }
  registrarhistoria() {
    this.reserva.Condition = 'atendido';
    this.registrar();
    const parametrocliente = this.cliente.id;
    const parametrodetalle = this.detallecita.id;
    const parametrofrontal = this.frontbody.id;
    const parametroposterior = this.endbody.id;
    const parametroexamen = this.entrevista.id;
    const array = this.ant1elegidos;
    const array2 = this.ant2elegidos;
    const array3 = this.ant3elegidos;
    const array4 = this.elegidosfrecuencia;
    const array5 = this.elegidosduracion;
    const parametro: ListAntHeredoFamiliarCita = {
      Condition: 'true',
      ClienteId: parametrocliente,
      AntecedenteheredofamiliarId: 0
    };
    const parametro2: ListAntNoPatologicoCita = {
      Condition: 'true',
      ClienteId: parametrocliente,
      AntecedentenopatologicoId: 0
    };
    const parametro3: ListAntPatologicoCita = {
      Condition: 'true',
      ClienteId: parametrocliente,
      AntecedentepatologicoId: 0
    };
    const parametro4: ListFrecuenciaCita = {
      Condition: 'true',
      DetallecitaId: parametrodetalle,
      FrecuenciaId: 0
    };
    const parametro5: ListDuracionCita = {
      Condition: 'true',
      DetallecitaId: parametrodetalle,
      DuracionId: 0
    };
    for (const item1 of array) {
      parametro.AntecedenteheredofamiliarId = item1;
      this.antheredofamiliarcitaService.saveAntHeredoFamiliarCita(parametro).subscribe(
        ressave1 => {
          console.log(ressave1);
        }, err => {
          this.toastr.error('Error api save antecedente heredo familiar - cita');
        }
      );
    }
    for (const item2 of array2) {
      parametro2.AntecedentenopatologicoId = item2;
      this.antnopatologicocitaService.saveAntNoPatologicoCita(parametro2).subscribe(
        ressave2 => {
          console.log(ressave2);
        }, err => {
          this.toastr.error('Error api save antecedente no patologico - cita');
        }
      );
    }
    for (const item3 of array3) {
      parametro3.AntecedentepatologicoId = item3;
      this.antpatologicocitaService.saveAntPatologicoCita(parametro3).subscribe(
        ressave3 => {
          console.log(ressave3);
        }, err => {
          this.toastr.error('Error api save antecedente patologico - cita');
        }
      );
    }
    for (const item4 of array4) {
      parametro4.FrecuenciaId = item4;
      this.frecuenciacitaService.saveFrecuenciaCita(parametro4).subscribe(
        ressave4 => {
          console.log(ressave4);
        }, err => {
          this.toastr.error('Error api save frecuencia - cita');
        }
      );
    }
    for (const item5 of array5) {
      parametro5.DuracionId = item5;
      this.duracioncitaService.saveDuracionCita(parametro5).subscribe(
        ressave5 => {
          console.log(ressave5);
        }, err => {
          this.toastr.error('Error api save duracion - cita');
        }
      );
    }
    this.reservaService.updateCita(this.elcodigo, this.reserva).subscribe(
      actualizacioncita => {
        this.mensaje = actualizacioncita;
        this.toastr.info('Cita Atendida');
        this.detallecitaService.updateDetalleCita(parametrodetalle, this.detallecita).subscribe(
          actualizaciondetalle => {
            this.mensaje1 = actualizaciondetalle;
            this.toastr.info('Dolencias Registradas');
            this.examenpacienteService.updateExamenCita(parametroexamen, this.entrevista).subscribe(
              actualizacionentrevista => {
                this.mensaje1 = actualizacionentrevista;
                this.toastr.info('Entrevista actualizada');
              }, err => {
                this.toastr.error('Error actualizar examen dolor');
              }
            );
            this.dermatomafrontalService.updateDermatomafrontal(parametrofrontal, this.frontbody).subscribe(
              actualizacionfrontal => {
                this.mensaje2 = actualizacionfrontal;
                this.toastr.info('Dermatoma frontal registrado');
              }, err => {
                this.toastr.error('Error actualizar historial dolor');
              }
            );
            this.dermatomaposteriorService.updateDermatomaposterior(parametroposterior, this.endbody).subscribe(
              actualizacionposterior => {
                this.mensaje3 = actualizacionposterior;
                this.toastr.info('Dermatoma posterior registrado');
              }, err => {
                this.toastr.error('Error actualizar historial dolor');
              }
            );
          }, err => {
            this.toastr.error('Error actualizar historial dolor');
          }
        );
      }, err => {
        this.toastr.error('Error actualizar historial dolor');
      }
    );
  }

  registrarhistoriaprocedimiento() {
    this.reserva.Condition = 'atendido';
    const parametrodetalle = this.detallecita.id;
    this.reservaService.updateCita(this.elcodigo, this.reserva).subscribe(
      actualizacioncita => {
        this.mensaje = actualizacioncita;
        this.toastr.info('Cita Atendida');
        this.detallecitaService.updateDetalleCita(parametrodetalle, this.detallecita).subscribe(
          actualizaciondetalle => {
            this.mensaje1 = actualizaciondetalle;
            this.toastr.info('Datos Registrados');
          }, err => {
            this.toastr.error('Error actualizar historial dolor');
          }
        );
      }, err => {
        this.toastr.error('Error actualizar historial dolor');
      }
    );

  }

}
