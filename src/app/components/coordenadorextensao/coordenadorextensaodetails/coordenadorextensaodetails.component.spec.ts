import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadorextensaodetailsComponent } from './coordenadorextensaodetails.component';

describe('CoordenadorextensaodetailsComponent', () => {
  let component: CoordenadorextensaodetailsComponent;
  let fixture: ComponentFixture<CoordenadorextensaodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordenadorextensaodetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoordenadorextensaodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
