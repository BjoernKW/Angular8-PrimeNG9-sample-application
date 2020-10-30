import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { ToastModule } from 'primeng/toast';
import { GalleriaModule } from 'primeng/galleria';
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';
import { By } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import createSpy = jasmine.createSpy;

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [
        ToastModule,
        GalleriaModule,
        DragDropModule,
        PanelModule,
        NoopAnimationsModule
      ],
      providers: [
        MessageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should stop the slideshow on starting drag', () => {
    let mockGalleria = {
      activeIndex: 2,
      stopSlideshow: createSpy('stopSlideshow')
    };

    component.onDragStart(mockGalleria);
    expect(mockGalleria.stopSlideshow).toHaveBeenCalled();
  });

  it('should update the image on drop', () => {

    let mockGalleria = {
      activeIndex: 2,
      stopSlideshow: createSpy('stopSlideshow')
    };

    component.onDragStart(mockGalleria);
    component.onPicDrop();

    fixture.detectChanges();

    expect(component.profileImage).toEqual("http://i.pravatar.cc/300?u=Mary");
    let imgElement = fixture.debugElement.query(By.css('#profilePic')).nativeElement;
    expect(imgElement).toBeTruthy();

  });
});
