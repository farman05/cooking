import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreceipeComponent } from './addreceipe.component';

describe('AddreceipeComponent', () => {
  let component: AddreceipeComponent;
  let fixture: ComponentFixture<AddreceipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreceipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
