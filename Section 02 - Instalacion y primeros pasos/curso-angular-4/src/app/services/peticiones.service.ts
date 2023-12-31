import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPrueba() {
    return 'HOla mundo desde el servicio';
  }

  getArticulos(): Observable<any> {
    return this._http.get(this.url);
  }
}
