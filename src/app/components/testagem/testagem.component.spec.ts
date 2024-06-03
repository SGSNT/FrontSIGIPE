import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestagemComponent } from './testagem.component';

describe('TestagemComponent', () => {
  let component: TestagemComponent;
  let fixture: ComponentFixture<TestagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
