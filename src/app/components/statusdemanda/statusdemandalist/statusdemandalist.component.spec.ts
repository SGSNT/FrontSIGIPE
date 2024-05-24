import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusdemandalistComponent } from './statusdemandalist.component';

describe('StatusdemandalistComponent', () => {
  let component: StatusdemandalistComponent;
  let fixture: ComponentFixture<StatusdemandalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusdemandalistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusdemandalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
