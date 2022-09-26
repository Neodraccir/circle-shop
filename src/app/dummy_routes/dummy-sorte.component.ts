import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({selector: 'app-dummy-sorte',template: '', styles: ['']})

export class DummySorteComponent {

  value = "flavour"
  items = ["cherry","banana","watermelon","coffee","coconut","strawberry","honey"];
  text =   [
    'Gute Wahl!',
    '',
    '',
    'Dann sag noch mal schnell . . .',
    '',
    'welche Sorte darf es sein?',
    '',
  ]
  previous="type"
  next="flavour2"

  constructor(private router : Router){
    setTimeout(() => {
      if (sessionStorage.getItem(this.previous) == undefined) {
        router.navigate(['/type']);
      }
    }, 0);

  }

  }



