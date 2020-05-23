import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieEffects } from './ngrx/effects/movie.effects';
import { metaReducers, reducers } from './ngrx/reducers';
import { PageModule } from './page/page.module';
import { SectionModule } from './section/section.module';
import { ServiceModule } from './service/service.module';
import { ShareModule } from './share/share.module';



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
