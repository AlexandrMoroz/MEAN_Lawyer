import { Component, OnInit } from '@angular/core';
import { DecreeService } from '../services/decree.service';
import { ProtocolService } from '../services/protocol.service';
import{ Decree, Protocol, Lawyer } from "../shared/models"
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  decrees: Array<Decree>;
  protocols: Array<Protocol>;
  lawyers: Array<Lawyer>;
  swipeConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto',
    width:730,
    freeMode: true,
    spaceBetween: 10,
    breakpoints: {
        640: {
          slidesPerView: 2,
          width:530,
        },
        320: {
            slidesPerView: 1,
            width:230,
        }
    }
  };

  protocolSearchText:string;
  decreeSearchText:string;
  constructor(decreeService:DecreeService, protocolService:ProtocolService) 
  {
    this.decrees = decreeService.loadDecrees();
    this.protocols = protocolService.loadProtocol();
  }
  
  ngOnInit(): void {
   
  }

  
}
