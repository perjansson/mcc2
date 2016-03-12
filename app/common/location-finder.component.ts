/// <reference path="../../typings/google.maps.d.ts" />

import {Component, EventEmitter, Input, Output, OnInit} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {Location} from './location';

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
    <button type="button" class="btn btn-warning btn-mcc" (click)="findLocation()" [ngClass]="{disabled: !supportGeolocation}">
      <i class="fa fa-location-arrow" [style.display]="!isGettingLocation || meetingLocation ? 'inherit' : 'none'"></i>
      <i class="fa fa-spinner fa-spin" [style.display]="isGettingLocation && !meetingLocation? 'inherit' : 'none'"></i>
      <span [style.display]="!meetingLocation ? 'inherit' : 'none'"> {{buttonText}}</span>
      <span [style.display]="meetingLocation ? 'inherit' : 'none'"> {{meetingLocation?.city}}</span>
    </button>
  `,
  directives: [NgClass]
})
export class LocationFinderComponent implements OnInit {

   _self: any;

  @Input() buttonText: string;
  @Output() onLocationFound = new EventEmitter<Location>();

  private geocoder: any;

  private supportGeolocation = false;
  private isGettingLocation = false;
  private meetingLocation: Location;

  constructor() {
    this._self = this;
    this.geocoder = new google.maps.Geocoder();
  }

  ngOnInit() {
    if (!!navigator.geolocation) {
      this.supportGeolocation = true;
    } else {
      this.supportGeolocation = false;
    }
  }

  findLocation() {
    this.isGettingLocation = true;

    navigator.geolocation.getCurrentPosition((position) => {
      this.geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.geocoder.geocode({location: latlng}, (results: any, status: any) => {
      if (status == google.maps.GeocoderStatus.OK) {
          var result = results[0];
          var city: any;
          for (var component in result['address_components']) {
              for (var i in result['address_components'][component]['types']) {
                  if (result['address_components'][component]['types'][i] == "locality") {
                      city = result['address_components'][component]['long_name'];
                  }
              }
          }
          this.meetingLocation = new Location(position.coords.latitude, position.coords.longitude, city);
          this.onLocationFound.emit(this.meetingLocation);
      } else {
          console.error('Error getting city from google api');
      }});
    }, () => {
        console.error('Error finding location');
    }, {
      timeout: 30000,
      maximumAge: 1,
      enableHighAccuracy: true
    });
  }

}
