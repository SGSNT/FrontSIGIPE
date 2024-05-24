import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuspessoadetailsComponent } from './statuspessoadetails.component';

describe('StatuspessoadetailsComponent', () => {
  let component: StatuspessoadetailsComponent;
  let fixture: ComponentFixture<StatuspessoadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatuspessoadetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatuspessoadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
