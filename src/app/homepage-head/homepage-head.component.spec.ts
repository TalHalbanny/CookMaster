import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHeadComponent } from './homepage-head.component';

describe('HomepageHeadComponent', () => {
  let component: HomepageHeadComponent;
  let fixture: ComponentFixture<HomepageHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
