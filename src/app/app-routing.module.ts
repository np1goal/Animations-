import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { CssAnimationTutorialComponent } from 'src/app/css-animation-tutorial/css-animation-tutorial.component';
import { ScssAnimationTutorialComponent } from 'src/app/scss-animation-tutorial/scss-animation-tutorial.component';
import { SvgAnimationTutorialComponent } from 'src/app/svg-animation-tutorial/svg-animation-tutorial.component';
import { JsAnimationTutorialComponent } from 'src/app/js-animation-tutorial/js-animation-tutorial.component';
import { LoadingAnimationsComponent } from './loading-animations/loading-animations.component';
import { ButtonAnimationsComponent } from './button-animations/button-animations.component';
import { BackgroundAnimationsComponent } from './background-animations/background-animations.component';
import { BorderAnimationsComponent } from './border-animations/border-animations.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"css-animation-tutorial", component: CssAnimationTutorialComponent},
  {path:"scss-animation-tutorial", component: ScssAnimationTutorialComponent},
  {path:"svg-animation-tutorial", component: SvgAnimationTutorialComponent},
  {path:"js-animation-tutorial", component: JsAnimationTutorialComponent},
  {path:"loading-animations", component: LoadingAnimationsComponent},
  {path:"button-animations", component: ButtonAnimationsComponent},
  {path:"background-animations", component: BackgroundAnimationsComponent},
  {path:"border-animations", component: BorderAnimationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [  HomeComponent, CssAnimationTutorialComponent,
                                    ScssAnimationTutorialComponent, SvgAnimationTutorialComponent,
                                    JsAnimationTutorialComponent, LoadingAnimationsComponent,
                                    ButtonAnimationsComponent, BackgroundAnimationsComponent, 
                                    BorderAnimationsComponent]