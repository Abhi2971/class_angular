import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { StudentModule } from './student/student.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, StudentModule, CommonModule, FormsModule],
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
    { id: 1, name: 'Abhishek shashikant shelke', age: 25,percentage:80 },
    { id: 2, name: 'Ganesh dilip pawar', age: 30,percentage:50 },
    { id: 3, name: 'Hemant vilas mane', age: 35,percentage:40 }
  ];
  has = true;
  toggleHasPermission(ev: any) {
    this.has = !this.has;
  }
  num2 = 20;
  student = {
    userName: "",
    dob: "",
    age: "",
    mobile: "",
    email:""
  }
  bgColor=1;
}