import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { ChkService } from '../../core/service/chk.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  /* Variables */
  searchList : any;

  constructor(private pageTitleService: PageTitleService, private service:ChkService) {

    /* Page title */
    this.pageTitleService.setTitle(" Search ");

    /* Page subTitle */
    this.pageTitleService.setSubTitle(" Our latest news and learning articles. ");

    this.service.getSearchContent().
      subscribe(response => {this.searchList = response},
                err => console.log(err),
                () => this.searchList
            );
  }

  ngOnInit() {
  }

}
