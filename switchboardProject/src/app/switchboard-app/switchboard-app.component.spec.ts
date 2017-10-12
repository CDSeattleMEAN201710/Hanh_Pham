import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchboardAppComponent } from './switchboard-app.component';

describe('SwitchboardAppComponent', () => {
  let component: SwitchboardAppComponent;
  let fixture: ComponentFixture<SwitchboardAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchboardAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchboardAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
