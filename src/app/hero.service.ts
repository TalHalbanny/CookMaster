import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //service will be available all over the website (as default).
})
export class HeroService {

  private apiUrl = 'http://localhost:3000/api/data';

  constructor(private http: HttpClient){}

    getData(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl); // Make a GET request and return the observable

}

}
