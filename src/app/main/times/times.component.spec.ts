import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesComponent } from './times.component';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

describe('TimesComponent', () => {
  let component: TimesComponent;
  let fixture: ComponentFixture<TimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimesComponent],
      imports: [
        TableModule,
        ContextMenuModule,
        DropdownModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
