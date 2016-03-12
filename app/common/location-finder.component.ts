import {Component, EventEmitter, Input, Output, OnInit} from 'angular2/core';

@Component({
  selector: 'location-finder',
  styles: [`
    .btn-mcc {
      font-size: 16px;
      padding: 8px 12px;
      border-radius: 8px;
      margin-left: auto;
      margin-right: auto;
    }
    @media only screen and (min-width : 480px) {
      .btn-mcc {
        font-size: 26px;
        padding: 13px 20px;
        border-radius: 8px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  `],
  template: `
    <button type="button" class="btn btn-warning btn-mcc" (click)="findLocation()">
      <i class="fa fa-location-arrow"></i> {{buttonText}}
    </button>
  `
})

export class LocationFinderComponent {

  @Input() buttonText: string;
  @Output() onLocationFound = new EventEmitter<Location>();

  constructor() { }

  findLocation() {
    console.log('findLocation');
  }

}
