import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuspessoalistComponent } from './statuspessoalist.component';

describe('StatuspessoalistComponent', () => {
  let component: StatuspessoalistComponent;
  let fixture: ComponentFixture<StatuspessoalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatuspessoalistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatuspessoalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
