/*
 * Call to action
 * Used in another components.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[callToAction]',
  templateUrl: './callToAction.component.html',
  styleUrls: ['./callToAction.component.scss']
})
export class CallToActionComponent implements OnInit {

  /*
   * Heading is a attribute.
   * Two way used this attribute:-
   * 1. <div callToAction [heading]="variableName"></div>
   * If used variableName so get the data from component.ts file.
   * 2. <div callToAction heading="heading text"></div>
   */
  @Input() heading : string;

  /*
   * subHeading is a attribute.
   * Two way used this attribute:-
   * 1. <div callToAction [subHeading]="variableName"></div>
   * If used variableName so get the data from component.ts file.
   * 2. <div callToAction subHeading="heading text"></div>
   */
  @Input() subHeading : string;

  /*
   * buttonInfo is a attribute.
   * Format of object. Eg:- {"url":"", "title": ""}
   * Used like this:- <div callToAction buttonInfo="variableName"></div>
   */
  @Input() buttonInfo : Object = {};

  constructor() { }

  ngOnInit() {
  }

}
