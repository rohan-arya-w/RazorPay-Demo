import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.Product_page().subscribe((data)=>{
      console.log(data)
    })
  }

}
