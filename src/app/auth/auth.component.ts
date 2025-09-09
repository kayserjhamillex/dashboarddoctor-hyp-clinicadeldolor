import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export default class AuthComponent implements OnInit {

  constructor(
    private router: Router,
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    if (this.doctorService.isLoggedIn()) {
      this.router.navigate(
        [
          'admin',
          'home'
        ]
      );
    } else {
      this.router.navigate(
        [
          'auth',
          'login'
        ]
      );
    }
    this.doctorService.client$.subscribe(res => {
      if (res) {
        this.router.navigate(
          [
            'admin',
            'home'
          ]
        );
      }
    });
  }

}
