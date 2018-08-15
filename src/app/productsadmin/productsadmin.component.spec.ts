import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsadmincomponentComponent } from './productsadmincomponent.component';

describe('ProductsadmincomponentComponent', () => {
  let component: ProductsadmincomponentComponent;
  let fixture: ComponentFixture<ProductsadmincomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsadmincomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsadmincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
