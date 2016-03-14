export class Location {

  constructor(private longitude: number, private latitude: number, private city: string) { }

  toString() {
    return 'longitude: ' + this.longitude + ' latitude: ' + this.latitude + ' city: ' + this.city;
  }

}
