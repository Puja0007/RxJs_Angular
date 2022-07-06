import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { ExhustMapComponent } from './observable/exhust-map/exhust-map.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { FromOfComponent } from './observable/from-of/from-of.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';

import { ObservableComponent } from './observable/observable.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { ToarrayComponent } from './observable/toarray/toarray.component';


const routes: Routes = [
  { path: '', component:ObservableComponent, children: [
    {path: '' , component:ListComponent},
    {path: 'fromevent', component:FromEventComponent},
    {path: 'interval', component:IntervalComponent},
    {path: 'fromof', component:FromOfComponent},
    {path: 'toarray', component:ToarrayComponent},
    {path: 'customobservable', component:CustomObservableComponent},
    {path: 'tap', component:TapComponent},
    {path: 'take', component:TakeComponent},
    {path: 'concat', component:ConcatComponent},
    {path: 'mergemap', component:MergeMapComponent},
    {path: 'concatmap', component:ConcatMapComponent},
    {path: 'switchmap', component:SwitchMapComponent},
    {path: 'exhustmap', component:ExhustMapComponent},



  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
