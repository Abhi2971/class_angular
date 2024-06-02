import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent implements OnInit,OnChanges,OnDestroy,AfterViewInit {
  @Input() title  :String = "";
  @Input() name  :String = "";
  @Input() mobile  :String = "";
  @Input() email  :String = "";

  @Output() buttonClicked = new EventEmitter<string>();

  constructor(){
    console.log("Invoked Constructor");
  }
  ngOnInit(){
    console.log("Invoked OnInt");
    
  }
  ngOnChanges(){
    console.log("Invoked OnChange");
    
  }
  ngOnDestroy(){
    console.log("Invoked Ondestroy");
    
  }
  ngAfterViewInit(){
    console.log("Invoked ViewInt");

  }

  buttonClickedEventHandler(ev : any){
    this.buttonClicked.emit("button clicked");
  }  
}
