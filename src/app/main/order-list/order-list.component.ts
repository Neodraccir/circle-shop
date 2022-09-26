import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderedListComponent implements OnInit {
  @Input('path') path: string = '';
  @Input('selections') selections: {
    type: string;
    flavour: string;
    flavour2: string;
    drink: string;
  } = { type: "", flavour: "", flavour2: "", drink: "" };



  checkValue = (v:string)=>{
    if(v!="") if(v!="Nicht ausgewählt") if(v!=undefined) if(v!=null) return true;
    return false;
  }




  ngOnInit(): void {

  }
}
