import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaalunosComponent } from './gaalunos.component';

describe('GaalunosComponent', () => {
  let component: GaalunosComponent;
  let fixture: ComponentFixture<GaalunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaalunosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaalunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
