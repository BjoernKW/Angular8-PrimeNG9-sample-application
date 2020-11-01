import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) {
  }

  getCustomersLarge() {
    return this._http.get<any>('assets/data/customers-large.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => {
        return data;
      });
  }
}
