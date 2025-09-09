import { Component } from '@angular/core';

@Component({
  selector: 'app-subproceso3',
  standalone: true,
  imports: [],
  templateUrl: './subproceso3.component.html',
  styleUrl: './subproceso3.component.css'
})
export default class Subproceso3Component implements OnInit {
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
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private tipoService: TipoService,
    private reservaService: CitaService,
    private activatedRoute: ActivatedRoute,
    private tipodosService: TipodosService,
    private clienteService: ClienteService,
    private global: FuncionesGlobalesService,
    private analisisService: AnalisisService,
    private resultadoService: ResultadoService,
    private antpatologicoService: AntpatologicoService,
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
    console.log('antecedente1 ' + parametro);
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
        this.elanalisisdetail = resget;
        const valor = !this.elanalisis.Value;
        if (valor === true) {
          this.elanalisis.Condition = 'obtener';
          const pago = +this.reserva.Labpay;
          const extra = +this.elanalisisdetail.laboratorio.Price;
          const aumento = pago + extra;
          this.reserva.Labpay = aumento.toString();
          this.reserva.Labpaymentstatus = 'por pagar';
          this.reserva.Labstatus = 'obtener';
        } else {
          this.elanalisis.Condition = 'asignado';
          const pago = +this.reserva.Labpay;
          const extra = +this.elanalisisdetail.laboratorio.Price;
          const disminuye = pago - extra;
          this.reserva.Labpay = disminuye.toString();
          if (disminuye >= 0) {
            this.reserva.Labpay = '0';
            this.reserva.Labstatus = 'asignado';
            this.reserva.Labpaymentstatus = 'sin monto';
          }
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
                console.log(this.analisisseleccioanados);
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

  historial() {
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
        this.toastr.error('Error Crear cita de historial');
      }
    );
  }
  historialprocedimiento() {
    this.toastr.info('Datos Registrados');
    this.router.navigate(
      [
        'admin',
        'home'
      ]
    );
  }
  // // tslint:disable-next-line: typedef
  // descargar() {
  //   const element = document.getElementById('parapdf');
  //   html2canvas(element).then(
  //     (canvas) => {
  //       const imgWidth = 208;
  //       // const pageheight = 295;
  //       const imgheight = canvas.height * imgWidth / canvas.width;
  //       const heightleft = imgheight;
  //       console.log(canvas);
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jspdf('p', 'mm', 'a4');
  //       const position = 0;
  //       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, heightleft);
  //       pdf.save('boleta.pdf');
  //     }
  //   );
  // }
}
