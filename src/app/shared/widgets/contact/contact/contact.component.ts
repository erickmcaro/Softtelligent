/*
 * Contact
 * Used in another component.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[softtelligent-contact]',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  /*
   * location is a attribute.
   * used like this:- <div contact location="text"></div> and
   * And like this:- <div contact [location]="variableName"></div>
   */
  @Input() location : any;

  /*
   * tel is a attribute.
   * used like this:- <div contact tel="text"></div>
   * And like this:- <div contact [tel]="variableName"></div>
   */
  @Input() tel : any;

  /*
   * mail is a attribute.
   * used like this:- <div contact mail="text"></div>
   * And like this:- <div contact [mail]="variableName"></div>
   */
  @Input() mail : any;

  constructor() { }

  ngOnInit() {
  }

}
