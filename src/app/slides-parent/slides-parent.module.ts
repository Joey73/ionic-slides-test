import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlidesParentPage } from './slides-parent.page';
import { Slide1Page } from './slide1/slide1.page';
import { Slide2Page } from './slide2/slide2.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesParentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SlidesParentPage,
    Slide1Page,
    Slide2Page
  ]
})
export class SlidesParentPageModule {}
