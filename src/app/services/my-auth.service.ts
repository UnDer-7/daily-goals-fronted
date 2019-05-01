import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyAuthService {
  private readonly resourceURL: string = environment.apiUrl + '/auth';

  constructor(
    private http: HttpClient,
  ) { }

  public googleLogin(): Observable<any> {
    // console.log('idToken', idToken);
    // const token = { idToken };
    return this.http.get<any>(`${this.resourceURL}/google`)
  }
}
