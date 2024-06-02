import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { ViewStudentComponent } from './component/view-student/view-student.component';
import { DeletStudentComponent } from './component/delet-student/delet-student.component';


@NgModule({
  declarations: [
    AddStudentComponent,
    StudentListComponent,
    ViewStudentComponent,
    DeletStudentComponent
  ],
  imports: [CommonModule],
  exports: [
    AddStudentComponent,
    StudentListComponent,
    ViewStudentComponent,
    DeletStudentComponent
  ]
})
export class StudentModule {

}
