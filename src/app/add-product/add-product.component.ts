import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  title=""
  price=""
  description=""
  category=""
  image=""
  rate=""
  count=""
  sname=""

  readValues=()=>
  {
    let data:any={
             "title":this.title,
             "price":this.price,
             "description":this.description,
             "category":this.category,
             "image":this.image,
             "rate":this.rate,
             "count":this.count,
             "sname":this.sname

    }

   console.log(data)
  }

}
