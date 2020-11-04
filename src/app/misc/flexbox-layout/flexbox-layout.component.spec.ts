import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxLayoutComponent } from './flexbox-layout.component';

describe('FlexboxLayoutComponent', () => {
  let component: FlexboxLayoutComponent;
  let fixture: ComponentFixture<FlexboxLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlexboxLayoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
