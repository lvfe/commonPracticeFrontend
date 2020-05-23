import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { ServiceModule } from './service/service.module';
import { SectionModule } from './section/section.module';
import { PageModule } from './page/page.module';
import { StoreModule, Action } from '@ngrx/store';
import { reducers, metaReducers } from './ngrx/reducers';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './ngrx/effects/movie.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShareModule,
    ServiceModule,
    SectionModule, 
    PageModule,
    AppRoutingModule,
    EffectsModule.forRoot([MovieEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
