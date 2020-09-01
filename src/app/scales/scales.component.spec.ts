import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ScalesStub } from '../testing-utils/scales-stub';
import { ScaleService } from '../shared/scale.service';
import { ScalesComponent } from './scales.component';

describe('ScalesComponent', () => {
  let component: ScalesComponent;
  let fixture: ComponentFixture<ScalesComponent>;
  let scalesCompEl: HTMLElement;
  let scaleServiceSpy: jasmine.SpyObj<ScaleService>;

  beforeEach(() => {
    scaleServiceSpy = jasmine.createSpyObj('ScaleService', ['getScale']);
    scaleServiceSpy.getScale.and.returnValue(of(ScalesStub.A_MAJOR));

    TestBed.configureTestingModule({
      declarations: [ScalesComponent],
      providers: [{ provide: ScaleService, useValue: scaleServiceSpy }, FormBuilder],
      imports: [ReactiveFormsModule]
    });

    fixture = TestBed.createComponent(ScalesComponent);
    component = fixture.componentInstance;
    scalesCompEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the C scale on initialisation', () => {
    expect(scaleServiceSpy.getScale).toHaveBeenCalledWith('C');
  });

  it('should get the scale with the selected tonic', () => {
    const tonicSelectBox: HTMLSelectElement = scalesCompEl.querySelector('#tonic-select');
    tonicSelectBox.value = 'B-flat';
    tonicSelectBox.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    expect(scaleServiceSpy.getScale).toHaveBeenCalledWith('B-flat');
  });

  it('should display the selected scale', () => {
    const tonicSelectBox: HTMLSelectElement = scalesCompEl.querySelector('#tonic-select');
    tonicSelectBox.value = 'B-flat';
    tonicSelectBox.dispatchEvent(new Event('change'));

    const scaleList: HTMLElement = scalesCompEl.querySelector('#scale > li');
    console.log(scaleList);
    // todo: check value of tonic
  });
});
