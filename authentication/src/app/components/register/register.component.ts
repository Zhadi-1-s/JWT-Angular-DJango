import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';

class ImageSnippet{
  constructor(public src:string, public file:File){}
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user!:User

  selectedFile!:ImageSnippet;

  constructor(private apiService:ApiService, private router: Router){
    this.user = {
      name: '',
      email:'',
      password:'',
      username:'',
      photoUrl:''
    }
  }


  register_user(name:string,email:string,password:string, username:string){
        this.user.name = name,
        this.user.email = email,
        this.user.password = password
        this.user.username = username;
        this.user.photoUrl = this.selectedFile.src
        this.apiService.register_user(this.user).subscribe(
          data => {
            console.log('Регистрация успешно завершена', data)
            console.log(this.user.username)
            // this.router.navigate(['login'])
          },
          error => {
            console.error(error)
          }
        )
  }

  processFile(img:any){
    const file:File = img.files[0];

    const reader = new FileReader();

    reader.addEventListener('load',(event:any) => {
      this.selectedFile = new ImageSnippet(event.target.result,file);
      console.log(this.selectedFile)
    })

    reader.readAsDataURL(file)
    
  }

}
