import { Component } from '@angular/core';

@Component({
  selector: 'app-subproceso2',
  standalone: true,
  imports: [],
  templateUrl: './subproceso2.component.html',
  styleUrl: './subproceso2.component.css'
})
export default class Subproceso2Component implements OnInit {
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
      Detail: '',
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
  elcodigo;
  mensaje;
  edad;
  name;
  mostrar = false;
  lafecha;
  tipos1: any = [];
  tipos2: any = [];
  analisis: any = [];
  analisispedido: any = [];
  rxtmrm: any = [];
  rxtmrmpedido: any = [];
  antheredofamiliars: any = [];
  antnopatologicos: any = [];
  antpatologicos: any = [];
  ant1elegidos: any = [];
  ant2elegidos: any = [];
  ant3elegidos: any = [];
  analisisfiltrado: any = [];
  rxtmrmfiltrado: any = [];
  analisisseleccioanados: any = [];
  rxtmrmseleccioanados: any = [];
  clienteant1elegidos: any = [];
  clienteant2elegidos: any = [];
  clienteant3elegidos: any = [];
  resultadosdeanalisis: any = [];
  historia: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private tipoService: TipoService,
    private reservaService: CitaService,
    private tipodosService: TipodosService,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private global: FuncionesGlobalesService,
    private analisisService: AnalisisService,
    private resultadoService: ResultadoService,
    private laboratorioService: LaboratorioService,
    private antpatologicoService: AntpatologicoService,
    private laboratoriodosService: LaboratoriodosService,
    private antnopatologicoService: AntnopatologicoService,
    private laboratoriocitaService: LaboratoriodoscitaService,
    private antheredofamiliarService: AntheredofamiliarService,
    private antpatologicocitaService: AntpatologicocitaService,
    private antnopatologicocitaService: AntnopatologicocitaService,
    private antheredofamiliarcitaService: AntheredofamiliarcitaService,
  ) { }
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
  //cambio realizado
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
  // hasta aqui
  onchangeselect3(parametro) {
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
    console.log(this.ant1elegidos);
  }
  onchangeselect4(parametro) {
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
  onchangeselect5(parametro) {
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
  //cambio realizado
  onchangeselect1(par) {
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
  // hasta aqui
  onchangeselect2(par) {
    // por mejorar
    // this.laboratoriocitaService.getLaboratoriocita(par).subscribe(
    //   resget => {
    //     this.ellaboratorio = resget;
    //     this.laboratoriodoscita = resget;
    //     const parametrito = this.laboratoriodoscita.laboratoriodos.TipodosId;
    //     const valor = !this.ellaboratorio.Value;
    //     if (valor === true) {
    //       this.ellaboratorio.Condition = 'obtener';
    //     } else {
    //       this.ellaboratorio.Condition = 'asignado';
    //     }
    //     // tslint:disable-next-line: no-unused-expression
    //     this.ellaboratorio.Value = valor;
    //     if (parametrito > 1) {
    //       this.laboratoriocitaService.updateLaboratoriocita(par, this.ellaboratorio).subscribe(
    //         resupdate => {
    //           this.mensaje = resupdate;
    //           this.laboratoriocitaService.getLaboratoriocitaCita(this.elcodigo).subscribe(
    //             reslaboratorio => {
    //               this.rxtmrmpedido = reslaboratorio;
    //               const seleccionados: any = [];
    //               for (const item of this.rxtmrmpedido) {
    //                 if (item.Value === true) {
    //                   seleccionados.push(item);
    //                   this.rxtmrmseleccioanados = seleccionados;
    //                 }
    //               }
    //             }, err => {
    //               this.toastr.error('Error get all analisis rx-tm-rm');
    //             }
    //           );
    //         }, err => {
    //           this.toastr.error('Error update one rxtmrm cita');
    //         }
    //       );
    //     }
    //   }, err => {
    //     this.toastr.error('Error get one rxtmrm cita');
    //   }
    // );
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
    //cambio realizado
    this.getlaboratorio();
    this.getlaboratoriodos();
    // hasta aqui
    this.getantheredofamiliares();
    this.getantnopatologicos();
    this.getantpatologicos();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.reservaService.getCita(params.id).subscribe(
        res => {
          this.reserva = res;
          this.ticket = res;
          const fechita = new Date(this.reserva.Appointment);
          this.lafecha = fechita.toISOString().split('T')[0];
          const codigo = this.ticket.id;
          this.clienteService.getClienteHistoria(this.reserva.ClienteId).subscribe(
            rescliente => {
              this.cliente = rescliente;
              this.edad = this.global.getedad(this.cliente.BirthDate);
              // se filtra para no mostrar el error
              this.reservaService.getHistorial(this.cliente.id, this.ticket.horario.especialista.EspecialidadId).subscribe(
                reshistoria => {
                  this.historia = reshistoria;
                  if (Object.entries(this.historia).length > 0) {
                    this.toastr.info('Paciente ya tiene historia en esta especialidad');
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
                  } else {
                    this.toastr.info('Primera cita en la especialidad del paciente');
                  }
                }, err => {
                  this.toastr.error('Error Api GET historia del paciente');
                }
              );
            }, error => {
              this.toastr.error('Error optencion de datos');
            }
          );
          this.elcodigo = codigo;
          console.log(this.elcodigo);
          this.toastr.success('historia del paciente');
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
          this.laboratoriocitaService.getLaboratoriocitaCita(this.elcodigo).subscribe(
            reslaboratorio => {
              this.rxtmrmpedido = reslaboratorio;
              const seleccionados: any = [];
              for (const item of this.rxtmrmpedido) {
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

  historial() {
    this.reserva.Condition = 'atendido';
    console.log(this.reserva);
    const parametrocliente = this.cliente.id;
    const array = this.ant1elegidos;
    const array2 = this.ant2elegidos;
    const array3 = this.ant3elegidos;
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
    this.reservaService.updateCita(this.elcodigo, this.reserva).subscribe(
      actualizacion => {
        this.mensaje = actualizacion;
        this.toastr.info('Datos Registrados');
        this.router.navigate(
          [
            'admin',
            'home'
          ]
        );
      }, err => {
        this.toastr.error('Error atencion cita de historial');
      }
    );
  }
  historialprocedimiento() {
    this.reserva.Condition = 'atendido';
    console.log(this.reserva);
    this.reservaService.updateCita(this.elcodigo, this.reserva).subscribe(
      actualizacion => {
        this.mensaje = actualizacion;
        this.toastr.info('Datos Registrados');
        this.router.navigate(
          [
            'admin',
            'home'
          ]
        );
      }, err => {
        this.toastr.error('Error atencion cita de historial');
      }
    );
  }
}

