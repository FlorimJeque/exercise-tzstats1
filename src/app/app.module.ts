import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './reducers/operation.reducers';
import { OperationEffects } from './effects/operation.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    StoreModule.forRoot({ operations: reducer }),
    EffectsModule.forRoot([OperationEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
