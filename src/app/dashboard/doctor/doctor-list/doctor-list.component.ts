import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})
export default class DoctorListComponent implements OnInit {
  doctors: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    this.getdoctors();
  }
  // tslint:disable-next-line: typedef
  getdoctors() {
    this.doctorService.getDoctors().subscribe(
      res => {
        this.doctors = res;
      },
      err => console.error(err)
    );
  }
  // tslint:disable-next-line: typedef
  crear() {
    this.router.navigate(
      [
        'admin',
        'doctor',
        'create'
      ]
    );
  }
  // tslint:disable-next-line: typedef
  editar(codigo) {
    console.log(codigo);
    const codigoaeditar = codigo;
    this.toastr.info('Editar doctor');
    this.router.navigate(
      [
        'admin',
        'doctor',
        'update',
        codigoaeditar
      ]
    );
  }

}

