/*
 * Home contact
 * Used in another component.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[softtelligent-homeContact]',
  templateUrl: './homeContact.component.html',
  styleUrls: ['./homeContact.component.scss']
})
export class HomeContactComponent implements OnInit {

   @Input() contact : any;
   lat: number = 18.3414888;
	lng: number = -67.2550643;

   constructor() { }

   ngOnInit() {
   }

}
