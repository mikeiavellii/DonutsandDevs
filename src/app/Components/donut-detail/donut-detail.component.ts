import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutsModel } from 'src/app/Models/donuts';
import { DonutsServiceService } from 'src/app/Services/donuts-service.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent {

  result:DonutsModel = {} as DonutsModel;
  constructor(private donutService:DonutsServiceService, private route: ActivatedRoute){}

  ngOnInit(){
    let paramMap = this.route.snapshot.paramMap;//this line takes screenshot of url and saves any parameters on the url
    let id:number = Number(paramMap.get("id"))//get works like a dictionary //paramMap returns back strings so parse it to a number to tell it its a number
    console.log(id);
    this.donutService.getDonutById(id).subscribe((response:DonutsModel)=> {
      console.log(response);
      this.result = response;
    });
  }
}
