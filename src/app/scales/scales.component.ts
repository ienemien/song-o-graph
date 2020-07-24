import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ScaleService } from '../shared/scale.service';
import { Scale } from '../model/scale';

@Component({
  selector: 'sog-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.css']
})
export class ScalesComponent implements OnInit {
  public scale: Scale;

  constructor(private readonly scaleService: ScaleService) { }

  ngOnInit(): void {
    this.scaleService.getScale('A')
    .subscribe((scale: Scale) => {
      this.scale = scale;
    }, err => {
      // todo: better error handling
      console.log(err);
    });
  }

}
