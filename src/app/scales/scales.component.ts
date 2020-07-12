import { Component, OnInit } from '@angular/core';
import { ScaleService } from '../shared/scale.service';

@Component({
  selector: 'sog-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.css']
})
export class ScalesComponent implements OnInit {

  constructor(private readonly scaleService: ScaleService) { }

  ngOnInit(): void {
    this.scaleService.getScale('C').subscribe(scale => {
      console.log(scale);
    }, err => {
      console.log(err);
    });
  }

}
