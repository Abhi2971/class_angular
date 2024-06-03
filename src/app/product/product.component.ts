import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  
  buttonClick(e:any){
    console.log(e);
    alert("you clicked");
  }
  mouseOver=false;
  ifMouseover=true;
  mouseOverHandler(ev:MouseEvent){
    console.log(ev);
    this.mouseOver=true;
    this.ifMouseover=false;  
  }
  mouseOutHandler(ev:MouseEvent){
    this.mouseOver=false;
    this.ifMouseover=true;  
  }
  
}
