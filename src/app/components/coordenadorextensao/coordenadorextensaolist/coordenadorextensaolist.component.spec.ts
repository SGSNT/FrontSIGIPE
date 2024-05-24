import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadorextensaolistComponent } from './coordenadorextensaolist.component';

describe('CoordenadorextensaolistComponent', () => {
  let component: CoordenadorextensaolistComponent;
  let fixture: ComponentFixture<CoordenadorextensaolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordenadorextensaolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoordenadorextensaolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
