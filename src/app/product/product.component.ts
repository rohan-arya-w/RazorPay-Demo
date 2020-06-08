import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
prod_det=[];
prod_name: any;
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.Product_page().subscribe((data:[])=>{
      
    data.forEach(element => { 
      let object = {};
      object['prod_id']=element['id']
      object['prod_name']=element['product_name']
      object['prod_material']=element['product_material']
      object['prod_adjective']=element['product_adjective']
      object['prod']=element['product']
      object['prod_dept']=element['department']
      object['prod_color']=element['product_color']
      object['prod_price']=element['product_price']
      this.prod_det.push(object);
      });
      console.log(this.prod_det);
      
      
       
      // for(var i =0 ; i<100;i++){
      //   this.prod_id = data[i]['id']
      //   this.prod_name = data[i]['product_name']
      //   this.pr
      // }
    })
  }

}
