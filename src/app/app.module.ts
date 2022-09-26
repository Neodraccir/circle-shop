import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { BackwardsComponent } from './main/footer/backwards/backwards.component';
import { InfoComponent } from './main/footer/info/info.component';
import { MainComponent } from './main/main.component';
import { CircleSliceComponent } from './main/circle-slice/circle-slice.component';
import { ItemComponent } from './main/item/item.component';
import { Routes, RouterModule } from '@angular/router';
import { TextComponent } from './main/text/text.component';
import { DummyComponent } from './dummy_routes/dummy.component';
import { DummySorteComponent } from './dummy_routes/dummy-sorte.component';
import { Dummy2teSorteComponent } from './dummy_routes/dummy-2te-sorte.component';
import {DummyGetraenkeComponent} from './dummy_routes/dummy-getraenke.component';
import {DummyWaitComponent} from './dummy_routes/dummy-wait.component';
import { OrderedListComponent } from './main/order-list/order-list.component'


const appRoutes: Routes= [
  {path:"type", component:DummyComponent},
  {path:"flavour", component:DummySorteComponent},
  {path:"flavour2", component:Dummy2teSorteComponent},
  {path: "drink", component: DummyGetraenkeComponent},
  {path: "wait", component: DummyWaitComponent},
  {path:"", redirectTo:"type",pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BackwardsComponent,
    InfoComponent,
    MainComponent,
    CircleSliceComponent,
    ItemComponent,
    TextComponent,
    DummyComponent,
    DummySorteComponent,
    Dummy2teSorteComponent,
    DummyGetraenkeComponent,
    DummyWaitComponent,
    OrderedListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {



}
