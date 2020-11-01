import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexTableComponent } from './complex-table.component';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';

describe('ComplexTableComponent', () => {
  let component: ComplexTableComponent;
  let fixture: ComponentFixture<ComplexTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexTableComponent],
      imports: [
        TableModule,
        MultiSelectModule,
        CalendarModule,
        DropdownModule,
        ProgressBarModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
