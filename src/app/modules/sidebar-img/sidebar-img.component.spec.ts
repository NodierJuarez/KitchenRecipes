import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarImgComponent } from './sidebar-img.component';

describe('SidebarImgComponent', () => {
  let component: SidebarImgComponent;
  let fixture: ComponentFixture<SidebarImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
