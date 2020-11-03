import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTableComponent } from './tree-table.component';
import { TreeTableModule } from 'primeng/treetable';
import { NodeService } from '../service/node.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TreeTableComponent', () => {
  let component: TreeTableComponent;
  let fixture: ComponentFixture<TreeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeTableComponent],
      imports: [
        TreeTableModule,
        HttpClientTestingModule
      ],
      providers: [
        NodeService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});