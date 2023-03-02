import { Component, Input } from '@angular/core';
import { Complete } from 'src/app/Models/dev-list';

@Component({
  selector: 'app-famous-person-detail',
  templateUrl: './famous-person-detail.component.html',
  styleUrls: ['./famous-person-detail.component.css']
})
export class FamousPersonDetailComponent {

  @Input() Person: Complete = {} as Complete
  display:boolean = false;

  toggleDisplay():void{
    this.display = !this.display;
  }
}
