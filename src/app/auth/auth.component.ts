import { Component, OnInit } from '@angular/core';
import { CheakFormService} from '../services/cheak-form.service'
import { FlashMessagesService} from 'angular2-flash-messages'
import { Router} from '@angular/router'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  login:string;
  password:string;

  constructor( 
    private checkFrom: CheakFormService,
    private flashMessages:FlashMessagesService,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }
  userLoginClick(){
    const user={
      login:this.login,
      password:this.password
    }
    this.authService.authUser(user).subscribe(
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
          this.router.navigate(['/dashbord']);
          this.authService.storeUser(data.token,data.user)
        }},
        error => console.log(error)
      );
  }
}
