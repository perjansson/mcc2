import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import { Currency } from './currency';

@Injectable()
export class CurrencyService {

  static CURRENCIES_API: string = 'src/app/currency/currencies.json';

  constructor(private _http: Http) { }

  getCurrencies() {
    return this._http.get(CurrencyService.CURRENCIES_API)
      .map((response: Response) => <Currency[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
