import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

export class Currency {
  constructor(public key: string, public name: string) { }
}

@Injectable()
export class CurrencyService {
  constructor(private _http: Http) { }

  getCurrencies() {
    return this._http.get('app/currencies.json')
      .map((response: Response) => <Currency[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
