import { Injectable } from '@angular/core';
import { Protocol } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ProtocolService {
  protocol: Array<Protocol>=[
    {
      name: "168-1",
      description:"1234q"
    },
    {
      name: "155-2",
      description:"1234q"
    },
    {
      name: "207",
      description:"1234q"
    },
    {
      name: "207",
      description:"1234q"
    },
    {
      name: "207",
      description:"1234q"
    },
    {
      name: "207",
      description:"1234q"
    },
    {
      name: "207",
      description:"1234q"
    },
    {
      name: "207",
      description:"1234q"
    },
    {
      name: "207",
      description:"1234q"
    }
  ]
  constructor() { }
  loadProtocol(){
    return this.protocol;
  }
}
