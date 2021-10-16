import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogProductComponent } from './dialog-product.component';

describe('DialogProductComponent', () => {
  let component: DialogProductComponent;
  let fixture: ComponentFixture<DialogProductComponent>;

  const mockProduct: any = {
    apod_site: '',
    copyright: '',
    date: '',
    description: '',
    hdurl: '',
    media_type: '',
    title: '',
    url: '',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogProductComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { data: mockProduct } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
