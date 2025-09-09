import { Component } from '@angular/core';

@Component({
  selector: 'app-especialista-update',
  standalone: true,
  imports: [],
  templateUrl: './especialista-update.component.html',
  styleUrl: './especialista-update.component.css'
})
export default class EspecialistaUpdateComponent implements OnInit {
  @ViewChild('file1') fileimagen;
  datosimagen: any = [];
  laurlimagen;
  @ViewChild('file2') fileimagen2;
  datosimagen2: any = [];
  cargoimagen2 = false;
  laurlimagen2;
  @ViewChild('file3') fileicono;
  datosiconon: any = [];
  cargoicono = false;
  laurlicono;
  doctores: any = [];
  especialidades: any = [];
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
  especialidad: Especialidad = {
    id: 0,
    Name: '',
    Resume: '',
    Image: '',
    Icon: '',
    Price: 0
  };
  especialista: ListEspecialista = {
    id: 0,
    Turn: '',
    EspecialidadId: 0,
    DoctorId: 0,
  };
  especialista1: ListEspecialista = {
    id: 0,
    Turn: '',
    EspecialidadId: 0,
    DoctorId: 0,
  };
  codigodoctor;
  codigoespecialidad;
  doctorupdate = false;
  especialidadupdate = 'view';
  especialistadetalle: Especialista = {
    id: 0,
    Turn: '',
    EspecialidadId: 0,
    DoctorId: 0,
    especialidad: {
      id: 0,
      Name: '',
      Image: '',
      Price: 0
    },
    doctor: {
      id: 0,
      Name: '',
      LastName: '',
      MedicalSchoolNumber: '',
      Email: '',
      Photo: ''
    }
  };
  detailespecialista: any = this.especialistadetalle;
  mensaje1;
  mensaje2;
  mensaje3;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute,
    private photoService: ProfileUploadService,
    private especialidadService: EspecialidadService,
    private especialistaService: EspecialistaService,
  ) { }
  onOptionsSelectedEspecialidad(event) {
    const value = event.target.value;
    this.codigoespecialidad = value;
    console.log(value);
  }
  modificar1() {
    this.doctorupdate = true;
  }
  modificar2() {
    this.especialidadupdate = 'modif';
  }
  changeImg() {
    this.fileimagen.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeImg2() {
    this.fileimagen2.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeIco() {
    this.fileicono.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeImagen() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.fileimagen.nativeElement.files;
    console.log(files);
    // let progress = this.uploadService.upload(images);
    this.photoService.uploadfoto(files[0], 'foto').subscribe(
      (resimage) => {
        console.log(resimage);
        this.datosimagen = resimage;
        this.laurlimagen = this.datosimagen.data.url;
        console.log(this.laurlimagen);
        this.doctor.Photo = this.laurlimagen;
      },
      console.error,
    );
  }
  // tslint:disable-next-line: typedef
  changeImagen2() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.fileimagen2.nativeElement.files;
    console.log(files);
    // let progress = this.uploadService.upload(images);
    this.photoService.uploadservicio(files[0], 'Imagen').subscribe(
      (resimage) => {
        console.log(resimage);
        this.datosimagen2 = resimage;
        this.laurlimagen2 = this.datosimagen2.data.url;
        console.log(this.laurlimagen2);
        this.especialidad.Image = this.laurlimagen2;
        this.cargoimagen2 = true;
      },
      console.error,
    );
  }
  // tslint:disable-next-line: typedef
  changeIcono() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.fileimagen.nativeElement.files;
    console.log(files);
    // let progress = this.uploadService.upload(images);
    this.photoService.uploadservicio(files[0], 'Icono').subscribe(
      (resico) => {
        console.log(resico);
        this.datosiconon = resico;
        this.laurlicono = this.datosiconon.data.url;
        console.log(this.laurlicono);
        this.especialidad.Icon = this.laurlicono;
        this.cargoicono = true;

      },
      console.error,
    );
  }
  ngOnInit(): void {
    this.getespecialidades();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.especialistaService.getEspecialista(params.id).subscribe(
        reseespecialista => {
          console.log(reseespecialista);
          this.especialista = reseespecialista;
          this.detailespecialista = reseespecialista;
          this.codigodoctor = this.especialista.DoctorId;
          this.codigoespecialidad = this.especialista.EspecialidadId;
          this.doctorService.getDoctor(this.codigodoctor).subscribe(
            resdoctor => {
              this.doctor = resdoctor;
            },
            err => {
              this.toastr.error('Error en la api parte doctor');
            }
          );
          this.especialidadService.getEspecialidad(this.codigoespecialidad).subscribe(
            resespecialidad => {
              this.especialidad = resespecialidad;
            },
            err => {
              this.toastr.error('Error en la api parte especialidad');
            }
          );
        },
        err => {
          this.toastr.error('Datos no obtenidos');
        }
      );
    }
  }
  updateDoctor() {
    const params = this.activatedRoute.snapshot.params;
    this.doctorService.updateDoctor(this.codigodoctor, this.doctor).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'especialista',
            'update',
            params.id
          ]
        );
        this.toastr.success('actualizando los datos del doctor');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo actualizar');
      }
    );
  }
  updateEspecialidad() {
    const params = this.activatedRoute.snapshot.params;
    console.log(this.especialidad);
    // llamando a especialidad de creacion que esta enlazada con el api
    this.especialidadService.updateEspecialidad(this.codigoespecialidad, this.especialidad).subscribe(
      res => {
        console.log(res);
        this.router.navigate(
          [
            'admin',
            'especialidad',
            'update',
            params.id
          ]
        );
        this.toastr.success('especialidad actualizado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo actualizar especialidad');
      }
    );
  }
  // // tslint:disable-next-line: typedef
  // onOptionsSelectedEspecialidad(event) {
  //   const value = event.target.value;
  //   this.codigoespecialidad = value;
  //   console.log(value);
  // }
  // // tslint:disable-next-line: typedef
  // onOptionsSelecteDoctor(event) {
  //   const value = event.target.value;
  //   this.codigodoctor = value;
  //   console.log(value);
  // }
  updateEspecialista() {
    const params = this.activatedRoute.snapshot.params;
    this.especialista.EspecialidadId = this.codigoespecialidad;
    this.especialista.DoctorId = this.codigodoctor;
    // delete this.especialidad.id;
    console.log(this.especialista);
    // llamando a especialidad de creacion que esta enlazada con el api
    this.especialistaService.updateEspecialista(params.id, this.especialista).subscribe(
      res => {
        console.log(res);
        this.mensaje3 = res;
        this.toastr.success('Especialista actualizado');
      },
      err => {
        console.error(err);
        this.toastr.error('no se pudo actualizado especialista');
      }
    );
  }
  getespecialidades() {
    this.especialidadService.getEspecialidads().subscribe(
      res => {
        this.especialidades = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  finish() {
    this.router.navigate(
      [
        'admin',
        'especialista',
        'list'
      ]
    );
  }
}

