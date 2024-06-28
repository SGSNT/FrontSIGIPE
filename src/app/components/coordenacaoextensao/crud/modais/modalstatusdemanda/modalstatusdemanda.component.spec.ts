import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalstatusdemandaComponent } from './modalstatusdemanda.component';

describe('ModalstatusdemandaComponent', () => {
  let component: ModalstatusdemandaComponent;
  let fixture: ComponentFixture<ModalstatusdemandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalstatusdemandaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalstatusdemandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
