import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({ selector: 'app-dummy-getraenke', template: '', styles: [''] })
export class DummyGetraenkeComponent {
  value = 'drink';
  items = ["water","coke","tea","fanta","juice","latte","no-drink"];
  text = [
    '',
    'Uii, das wird ',
    'lecker ',
    '! ! !',
    'Willst du auch noch ein Getränk dazu?',
    '',
    '',
  ];
  previous = "flavour2"
  next = 'wait';

  constructor(private router : Router){
    setTimeout(() => {
      if (sessionStorage.getItem(this.previous) == undefined) {
        router.navigate(['/type']);
      }
    }, 0);

  }

}
