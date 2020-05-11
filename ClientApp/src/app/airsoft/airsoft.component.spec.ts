import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirsoftComponent } from './airsoft.component';

describe('AirsoftComponent', () => {
  let component: AirsoftComponent;
  let fixture: ComponentFixture<AirsoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirsoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirsoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
