import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackwardsComponent } from './backwards.component';

describe('BackwardsComponent', () => {
  let component: BackwardsComponent;
  let fixture: ComponentFixture<BackwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackwardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
