import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({ selector: 'app-dummy-wait', template: '', styles: [''] })
export class DummyWaitComponent {
  value = 'wait';
  items = ["wait"];
  text = [
    'Habe einen . . .',
    'nur einen',
    ' ewigen ',
    'Moment Geduld.',
    'Im Anschluss bringen wir dir ',
    ' dein Lielingseis ',
    '!',
  ];
  previous="drink"
  next = '';

  constructor(private router : Router){
    setTimeout(() => {
      if (sessionStorage.getItem(this.previous) == undefined) {
        router.navigate(['/type']);
      }
    }, 0);

  }

}
