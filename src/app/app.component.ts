import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { StudentModule } from './student/student.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, StudentModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  fNAme = 'abhishek';
  a = 2;
  b = 5;

  add(a: number, b: number): number {
    return a + b;
  }

  heading = 'this is heading';
  studentList = [
    { id: 1, name: 'abhishek', age: 25 },
    { id: 2, name: 'rahul', age: 30 },
    { id: 3, name: 'raj', age: 35 }
  ];
  has = true;
  toggleHasPermission(ev:any){
    this.has=!this.has;
  }
  num2=20;
}
