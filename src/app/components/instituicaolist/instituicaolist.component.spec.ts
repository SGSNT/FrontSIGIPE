import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaolistComponent } from './instituicaolist.component';

describe('InstituicaolistComponent', () => {
  let component: InstituicaolistComponent;
  let fixture: ComponentFixture<InstituicaolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstituicaolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstituicaolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
