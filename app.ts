//our root app component
import {Component} from '@angular/core';
import * as config from '../config';

@Component({
  selector: 'my-app',
  styles: [`
    .search-results {
      height: 100px;
      overflow: scroll;
    }
  `],
  template: `
    <div class="search-results"
    infiniteScroll
    [infiniteScrollDistance]="2"
    [infiniteScrollThrottle]="50"
    (scrolled)="onScroll()"
    [infiniteScrollDisabled]="isFullListDisplayed"
    [scrollWindow]="false">
      <p *ngFor="let item of itemsToShow; let i = index">
        {{i + ' ' + item.Name}}
      </p>
    </div>
  `
})
export class AppComponent {
   private noOfItemsToShowInitially: number = 5;
   private itemsToLoad: number = 5;
   private items = [{
        "Name": "XYz Company0"
    },
    {
        "Name": "XYz Company1"
    }, {
        "Name": "XYz Company2"
    }, {
        "Name": "XYz Company3"
    }, {
        "Name": "XYz Company4"
    }, {
        "Name": "XYz Company5"
    }, {
        "Name": "XYz Company6"
    },
    {
        "Name": "XYz Company7"
    }, {
        "Name": "XYz Company8"
    }, {
        "Name": "XYz Company9"
    }, {
        "Name": "XYz Company10"
    }, {
        "Name": "XYz Company11"
    }, {
        "Name": "XYz Company12"
    },
    {
        "Name": "XYz Company13"
    }, {
        "Name": "XYz Company14"
    }, {
        "Name": "XYz Company15"
    }, {
        "Name": "XYz Company16"
    }, {
        "Name": "XYz Company17"
    }];
  public itemsToShow = this.items.slice(0, this.noOfItemsToShowInitially);
  public isFullListDisplayed: boolean = false;
  
    onScroll() {
      if(this.noOfItemsToShowInitially <= this.items.length) {
        this.noOfItemsToShowInitially += this.itemsToLoad;
        this.itemsToShow = this.items.slice(0, this.noOfItemsToShowInitially);
        console.log("scrolled");
      } else {
        this.isFullListDisplayed = true;
      }
    }
}
