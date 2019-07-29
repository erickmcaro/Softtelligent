import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[testimonial]',
  templateUrl: './testimonialSlider.component.html',
  styleUrls: ['./testimonialSlider.component.scss']
})
export class testimonialSliderComponent implements OnInit {

   @Input() testimonialContent : any;
   constructor() {

   }

   ngOnInit() {
   }

}
