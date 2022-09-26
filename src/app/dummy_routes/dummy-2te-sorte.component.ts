import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({ selector: 'app-dummy-2te-sorte', template: '', styles: [''] })
export class Dummy2teSorteComponent {
  value = 'flavour2';
  items = [
    'cherry',
    'banana',
    'watermelon',
    'coffee',
    'coconut',
    'strawberry',
    'honey',
  ];
  text = [
    'Noch eine Kugel!',
    'Die zweite Kugel gibt es ',
    'gratis',
    '.',
    'Würd ich mir ',
    'nicht entgehen ',
    'lassen.',
  ];
  previous = 'flavour';
  next = 'drink';

  constructor(private router: Router) {
    setTimeout(() => {
      if (sessionStorage.getItem(this.previous) == undefined) {
        router.navigate(['/type']);
      }
    }, 0);
  }
}
