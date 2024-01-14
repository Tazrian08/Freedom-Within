import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoChangeComponent } from './info-change.component';

describe('InfoChangeComponent', () => {
  let component: InfoChangeComponent;
  let fixture: ComponentFixture<InfoChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoChangeComponent]
    });
    fixture = TestBed.createComponent(InfoChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
