import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user!:User

  constructor(private apiService:ApiService, private router: Router){
    this.user.name = '',
    this.user.email = '',
    this.user.password = ''
  }

  register_user(name:string,email:string,password:string){
        this.user.name = name,
        this.user.email = email,
        this.user.password = password
        this.apiService.register_user(this.user).subscribe(
          data => {
            console.log('Регистрация успешно завершена', data)
            this.router.navigate(['login'])
          },
          error => {
            console.error(error)
          }
        )
  }

}
