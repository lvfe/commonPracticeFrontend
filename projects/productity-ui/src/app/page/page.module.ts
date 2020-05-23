import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { SubpageComponent } from './subpage/subpage.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx/reducers';



@NgModule({
  declarations: [PageComponent, SubpageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('page', reducer)
  ],
  exports: [PageComponent]
})
export class PageModule { }
