import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from '../ngrx/effects/login.effects';



@NgModule({
  declarations: [SectionComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([LoginEffects])
  ],
  exports: [SectionComponent]
})
export class SectionModule { }
