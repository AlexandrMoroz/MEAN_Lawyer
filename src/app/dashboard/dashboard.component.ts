import { Component, OnInit } from '@angular/core';
import { CheakFormService} from '../services/cheak-form.service'
import { FlashMessagesService} from 'angular2-flash-messages'
import { Router} from '@angular/router'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private checkFrom: CheakFormService,
    private flashMessages:FlashMessagesService,
    private router: Router,
    private authService: AuthService
    ) { }
  ngOnInit(): void {
  }
  logoutUser(){
    this.authService.logout();
    this.flashMessages.show("вы вышли из учетной записи",{
      cssClass:"alert-danger",
      timeout:4000
    });
    this.router.navigate(['auth'])
    return false;
  }
}
