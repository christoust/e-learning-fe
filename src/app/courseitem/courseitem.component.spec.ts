import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseitemComponent } from './courseitem.component';

describe('CourseitemComponent', () => {
  let component: CourseitemComponent;
  let fixture: ComponentFixture<CourseitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
