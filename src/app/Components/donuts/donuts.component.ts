import { Component } from '@angular/core';
import { DonutListModel } from 'src/app/Models/donut-dets-model';
import { DonutsServiceService } from 'src/app/Services/donuts-service.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {

  Result:DonutListModel = {} as DonutListModel;
constructor(private donutsService:DonutsServiceService){}

ngOnInit(){
  this.donutsService.getDonuts().subscribe((response:DonutListModel) =>{
    console.log(response);
    this.Result = response;
  });
}

}
