import { Component } from '@angular/core';
import { DevsModel } from 'src/app/Models/dev-list';
import { DevsServiceService } from 'src/app/Services/devs-service.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent {
  result:DevsModel = {} as DevsModel;
  constructor(private devService:DevsServiceService) {}

  ngOnInit(){
    this.devService.getDevs().subscribe((response:DevsModel)=>{ //response is the response subnscribe gets bacl
      console.log(response)
      this.result = response;
    })
  }
}
