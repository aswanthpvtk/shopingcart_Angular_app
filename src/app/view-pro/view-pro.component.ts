import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-pro',
  templateUrl: './view-pro.component.html',
  styleUrls: ['./view-pro.component.css']
})
export class ViewProComponent {


  constructor(private api:ApiService)
  {

    api.fetchpro().subscribe(

      (Response)=>
      {
        this.product=Response;
      }
    )

  }


product:any=[]
}
