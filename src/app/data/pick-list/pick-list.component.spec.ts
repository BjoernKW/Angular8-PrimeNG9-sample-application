import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickListComponent } from './pick-list.component';
import { PickListModule } from 'primeng/picklist';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PickListComponent', () => {
  let component: PickListComponent;
  let fixture: ComponentFixture<PickListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PickListComponent],
      imports: [
        PickListModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
