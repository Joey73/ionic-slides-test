import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'slides-parent', loadChildren: './slides-parent/slides-parent.module#SlidesParentPageModule' },
  { path: 'slide1', loadChildren: './slides-parent/slide1/slide1.module#Slide1PageModule' },
  { path: 'slide2', loadChildren: './slides-parent/slide2/slide2.module#Slide2PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
