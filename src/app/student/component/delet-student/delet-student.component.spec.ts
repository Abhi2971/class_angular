import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletStudentComponent } from './delet-student.component';

describe('DeletStudentComponent', () => {
  let component: DeletStudentComponent;
  let fixture: ComponentFixture<DeletStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
