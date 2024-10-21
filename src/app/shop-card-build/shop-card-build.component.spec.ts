import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCardBuildComponent } from './shop-card-build.component';

describe('ShopCardBuildComponent', () => {
  let component: ShopCardBuildComponent;
  let fixture: ComponentFixture<ShopCardBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCardBuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopCardBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
