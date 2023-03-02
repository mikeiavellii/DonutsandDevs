import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevsModel } from '../Models/dev-list';

@Injectable({
  providedIn: 'root'
})
export class DevsServiceService {

  apiUrl:string ="https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";
  constructor(private http:HttpClient) { }

  getDevs():Observable<DevsModel>{ 
    return this.http.get<DevsModel>(this.apiUrl);
  }
}
