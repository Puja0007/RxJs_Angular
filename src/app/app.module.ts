import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { FromOfComponent } from './observable/from-of/from-of.component';
import { ToarrayComponent } from './observable/toarray/toarray.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { ExhustMapComponent } from './observable/exhust-map/exhust-map.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    FromOfComponent,
    ToarrayComponent,
    CustomObservableComponent,
    TapComponent,
    TakeComponent,
    ConcatComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    ExhustMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
