import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

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
  public notes: string[] = ['C', 'C-sharp', 'D', 'D-sharp', 'E', 'F', 'F-sharp', 'G', 'G-sharp', 'A', 'B-flat', 'B'];
  public tonicNameControl: FormControl = new FormControl('C');

  constructor(private readonly scaleService: ScaleService, private readonly fb: FormBuilder ) { }

  ngOnInit() {
    this.getSelectedScale();
  }

  changeTonic() {
    this.getSelectedScale();
  }

  getSelectedScale() {
      this.scaleService.getScale(this.tonicNameControl.value)
      .subscribe((scale: Scale) => {
        this.scale = scale;
      }, err => {
        // todo: better error handling
        console.log(err);
      });
  }
}
