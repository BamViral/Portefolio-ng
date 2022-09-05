import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SoundComponent } from './sound/sound.component';
import { StreamComponent } from './stream/stream.component';

const routes: Routes = [
  {path:'',component:CarouselComponent},
  {path:'about',component:AboutComponent},
  {path:'stream',component:StreamComponent},
  {path:'sound',component:SoundComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
