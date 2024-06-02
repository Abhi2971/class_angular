import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {
heading="add student form";
h1clss="student info";
getId(){
  return "student-header";
}
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
