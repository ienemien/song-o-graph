import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ScaleDegree } from '../model/scale-degree.enum';
import { Scale } from '../model/scale';
import { ScaleService } from './scale.service';
import { ScalesStub } from '../testing-utils/scales-stub';

describe('ScaleService', () => {
  let service: ScaleService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ScaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a scale by its tonic', () => {
    service.getScale('A').subscribe(scale => {
      expect(scale.pitchesPerDegree.get(ScaleDegree.TONIC).names[0]).toEqual('A');
    }, error => {
      fail(error);
    });

    const req = httpTestingController.expectOne('api/scale?tonic=A');

    expect(req.request.method).toEqual('GET');
    req.flush(ScalesStub.A_MAJOR);
   });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
});
