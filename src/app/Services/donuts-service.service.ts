import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutListModel } from '../Models/donut-dets-model';
import { DonutsModel } from '../Models/donuts';

@Injectable({
  providedIn: 'root'
})
export class DonutsServiceService {

  apiUrl ="https://grandcircusco.github.io/demo-apis/donuts";
  constructor(private http:HttpClient) { }
  
  getDonuts():Observable<DonutListModel>{ 
    return this.http.get<DonutListModel>(`${this.apiUrl}.json`);
  }
  getDonutById(id:number):Observable<DonutsModel>{ 
    return this.http.get<DonutsModel>(`${this.apiUrl}/${id}.json`);
  }
}