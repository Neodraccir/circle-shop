import { Component } from '@angular/core';
@Component({ selector: 'app-dummy', template: '', styles: [''] })
export class DummyComponent {
  value = 'type';
  items = ["ice-cream", "ice-waffle"];
  text = [
    'Na!?',
    'Willst du ein ',
    'Waffeleis',
    '?',
    'oder lieber eine ',
    'Waffel mit Eis',
    '?',
  ];
  previous=""
  next = "flavour"
}
