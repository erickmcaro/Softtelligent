import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'latestTweets',
  templateUrl: './latestTweets.component.html',
  styleUrls: ['./latestTweets.component.scss']
})
export class LatestTweetsComponent implements OnInit {

	@Input() tweets : any;
	
	constructor() { }

	ngOnInit() {
	}

}
