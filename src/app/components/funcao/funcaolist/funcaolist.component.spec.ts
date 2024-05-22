import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaolistComponent } from './funcaolist.component';

describe('FuncaolistComponent', () => {
  let component: FuncaolistComponent;
  let fixture: ComponentFixture<FuncaolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncaolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncaolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
