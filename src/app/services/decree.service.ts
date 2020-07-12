import { Injectable } from '@angular/core';
import { Decree } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class DecreeService {
  decrees: Array<Decree> = [
    {
      name: '121-1',
      description: '121-1',
    },
    {
      name: '121-2',
      description: '121-2',
    },
    {
      name: '121-3',
      description: '1234q',
    },
    {
      name: '122-1',
      description: '122-1',
    },
    {
      name: '122-2',
      description: '122-2',
    },
    {
      name: '122-3',
      description: '122-3',
    },
    {
      name: '122-4',
      description: '122-4',
    },
    {
      name: '122-5',
      description: '122-5',
    },
  ];

  constructor() {}

  loadDecrees() {
    return this.decrees;
  }
}
