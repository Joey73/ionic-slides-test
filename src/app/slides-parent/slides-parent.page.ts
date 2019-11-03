import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides-parent',
  templateUrl: './slides-parent.page.html',
  styleUrls: ['./slides-parent.page.scss'],
})
export class SlidesParentPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }
}
