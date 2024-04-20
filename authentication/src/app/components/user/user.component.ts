import { Component,OnInit,OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy{
  
  user!:User;

  constructor(private apiService:ApiService,private router: Router){
    this.user = {name:'',email:'',password:'',username:'',photoUrl:''}
  }

  ngOnInit(): void {
     this.apiService.getUser().subscribe(
      data => {
        console.log('data taked succesfully', data)
        this.user = data
      },
      error => {
        console.error('error is here !!!',error)
        this.router.navigate(['login'])
      }
     )
  }

  logout(){
    this.apiService.logout_user().subscribe(
      data => {
        console.log(data)
        this.router.navigate(['login'])
      },
      error => {
        console.error(error)
      }
    )
  }
  ngOnDestroy(): void {

  }

  show(test:any):void{
    console.log(test)
  }
}