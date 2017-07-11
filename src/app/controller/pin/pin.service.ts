import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import 'rxjs/add/operator/toPromise';

import { Pin } from './pin.model';

@Injectable()
export class PinService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = 'http://' + location.hostname + ':3000/';  // URL to web api
  public pinStateSubscribe: Observable<Pin>;
  constructor(private http: Http) { }

  public getAllPins(): Promise<Pin[]> {
    return this.http.get(this.url + 'all/get')
      .toPromise()
      .then(response => response.json() as Pin[])
      .catch(this.handleError);
  }

  public getPinState(pin: Pin): Observable<Pin> {
    return this.http.get(this.url + 'pin/get/' + pin.ID)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public setPinStateSubscribe(pin: Pin, interval: any) {
    this.pinStateSubscribe = IntervalObservable.create(interval).flatMap(() => {
      return this.getPinState(pin);
    });
  }

  public setPinState(pin: Pin): Promise<Pin> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let json = JSON.stringify(pin);
    return this.http.post(this.url + "pin/set", json, options)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
