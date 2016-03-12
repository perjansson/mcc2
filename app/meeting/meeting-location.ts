export class MeetingLocation {

  constructor(private longitude: string, private latitude: string) { }

  get longitude(): string {
    return this.longitude;
  }

  get latitude(): string {
    return this.latitude;
  }

}
