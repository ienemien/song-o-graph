import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ScalesStub } from '../testing-utils/scales-stub';
import { ScaleService } from '../shared/scale.service';
import { ScalesComponent } from './scales.component';

describe('ScalesComponent', () => {
  let component: ScalesComponent;
  let fixture: ComponentFixture<ScalesComponent>;
  let scaleServiceSpy: jasmine.SpyObj<ScaleService>;

  beforeEach(() => {
    scaleServiceSpy = jasmine.createSpyObj('ScaleService', ['getScale']);
    scaleServiceSpy.getScale.and.returnValue(of(ScalesStub.C_MAJOR));

    TestBed.configureTestingModule({
      declarations: [ScalesComponent],
      providers: [{ provide: ScaleService, useValue: scaleServiceSpy }]
    });

    fixture = TestBed.createComponent(ScalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
