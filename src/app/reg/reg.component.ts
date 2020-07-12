import { Component, OnInit } from '@angular/core';
import { CheakFormService} from '../services/cheak-form.service'
import { FlashMessagesService} from 'angular2-flash-messages'
import { Router} from '@angular/router'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  name:String;
  login:String;
  email:String;
  password:String;

  constructor(
    private checkFrom: CheakFormService,
    private flashMessages:FlashMessagesService,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  userRegisterClick(){
   const user={
      name: this.name,
      login:this.login,
      email:this.email,
      password:this.password
   };

    if(!this.checkFrom.checkEmail(user.name)){
    this.flashMessages.show("Имя пользователя не введено",{
      cssClass:"alert-danger",
      timeout:4000
    });
    return false;
  }
    else if(!this.checkFrom.checkLogin(user.login)){
    this.flashMessages.show("Логин пользователя не введен",{
      cssClass:"alert-danger",
      timeout:4000
    });
    return false;
  }
    else if(!this.checkFrom.checkEmail(user.email)){
    this.flashMessages.show("Email пользователя не введен",{
      cssClass:"alert-danger",
      timeout:4000
    });
    return false;
  }
    else if(!this.checkFrom.checkPassword(user.password)){
    this.flashMessages.show("Пароль пользователя не введен",{
      cssClass:"alert-danger",
      timeout:4000
    });
    return false;
  }

  if(user.password == undefined){
    this.flashMessages.show("Введите пароль",{
      cssClass:"alert-danger",
      timeout:2000
    });
    return false;
  }

  this.authService.registerUser(user).subscribe(
    (data: any) => {
    if(!data.succes){
      this.flashMessages.show(data.msg,{
        cssClass:"alert-danger",
        timeout:2000
      });
    
    }else{
      this.flashMessages.show(data.msg,{
        cssClass:"alert-success",
        timeout:2000
      });
      this.router.navigate(['/auth']);
    }},
    error => console.log(error)
  );

}
}
