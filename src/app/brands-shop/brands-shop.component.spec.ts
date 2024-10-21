import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsShopComponent } from './brands-shop.component';

describe('BrandsShopComponent', () => {
  let component: BrandsShopComponent;
  let fixture: ComponentFixture<BrandsShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
