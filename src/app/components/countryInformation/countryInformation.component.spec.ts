import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInformationComponent } from './countryInformation.component';

describe('CountryInformationComponent', () => {
  let component: CountryInformationComponent;
  let fixture: ComponentFixture<CountryInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryInformationComponent]
    });
    fixture = TestBed.createComponent(CountryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
