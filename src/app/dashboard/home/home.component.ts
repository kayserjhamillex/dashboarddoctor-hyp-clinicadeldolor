import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    imports: [
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {
  reservas: any = [];
  reservasfiltradas: any = [];
  bandera = false;
  banderita = false;
  filtro = false;
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
  reservita: ListCita = {
    id: 0,
    Appointment: new Date(),
    Pay: '',
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
    SignsandSymptoms: '',
    DescriptionProblem: '',
    SurgicalHistory: '',
    MedicalHistory: '',
    AllergicHistory: '',
    PhysicalExam: '',
    Diagnosis: '',
    LaboratoryExam: '',
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
    SignsandSymptoms: '',
    DescriptionProblem: '',
    SurgicalHistory: '',
    MedicalHistory: '',
    AllergicHistory: '',
    PhysicalExam: '',
    Diagnosis: '',
    LaboratoryExam: '',
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
  ticket: any = this.reservadetail;
  mensaje1;
  mensaje2;
  codigoreserva;
  fecha: Date;
  fechamin: Date;
  fechamax: Date;
  stringmax;
  stringmin;
  fechastringvalue;
  hoystring;
  constructor(
    private pd: DatePipe,
    private router: Router,
    private toast: ToastrService,
    private reservaService: CitaService
  ) { }
  ngOnInit(): void {
    this.fechamin = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1);
    this.fechamax = new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());
    this.stringmin = this.pd.transform(this.fechamin, 'yyyy-MM-dd');
    this.stringmax = this.pd.transform(this.fechamax, 'yyyy-MM-dd');
    this.doctor = JSON.parse(localStorage.getItem('doctor'));
    this.filtrohoy();
  }

  filtrohoy() {
    const fechita = new Date();
    this.hoystring = fechita.toISOString().split('T')[0];
  }
  getreservas() {
    const codigo = this.doctor.id;
    const fechita = new Date(this.fecha);
    this.fechastringvalue = fechita.toISOString().split('T')[0];
    console.log(this.fechastringvalue, this.hoystring);
    if (this.fechastringvalue === this.hoystring) {
      this.filtro = true;
      console.log('la fecha es hoy');
    } else {
      this.filtro = false;
    }
    this.reservaService.getHome(this.fechastringvalue).subscribe(
      rescitas => {
        console.log(rescitas);
        if (Object.entries(rescitas).length > 0) {
          this.toast.info('Citas de la fecha elegida');
          this.reservas = rescitas;
          this.bandera = true;
          const array = this.reservas;
          const filtrado: any = [];
          for (const obj of array) {
            const parametro = obj.horario.especialista.DoctorId;
            if (codigo === parametro) {
              filtrado.push(obj);
              this.reservasfiltradas = filtrado;
            }
          }
        } else {
          this.bandera = false;
        }
      }, err => {
        this.toast.error('Error Api Citas Home');
      }
    );
  }

  detail(codigo) {
    this.reservaService.getCita(codigo).subscribe(
      rescita => {
        if (rescita !== null) {
          this.reservita = rescita;
          this.ticket = rescita;
          this.banderita = true;
          this.codigoreserva = this.reservita.id;
          this.toast.success('Detalles Cita');
        } else {
          this.banderita = false;
          this.toast.error('datos no obtenidos de la reserva');
        }
      }
    );
  }
  atender(codigo) {
    console.log(this.reservita);
    const parametro = this.reservita.Type;
    if (parametro === 'normal') {
      this.router.navigate(
        [
          'admin',
          'procesos',
          'proceso1',
          'subproceso2',
          codigo
        ]
      );
    } else if (parametro === 'medicina del dolor') {
      this.router.navigate(
        [
          'admin',
          'procesos',
          'proceso3',
          'subproceso2',
          codigo
        ]
      );
    }
  }
}

