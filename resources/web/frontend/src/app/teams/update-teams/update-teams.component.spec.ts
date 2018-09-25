import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeamsComponent } from './update-teams.component';

describe('UpdateTeamsComponent', () => {
  let component: UpdateTeamsComponent;
  let fixture: ComponentFixture<UpdateTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
