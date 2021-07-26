import {NgModule} from '@angular/core';

import {SharedModule} from '@app/shared/shared.module'

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SocialNetworkComponent} from "./live-feeds/social-network.component";
import {LiveFeedsComponent} from "./live-feeds/live-feeds.component";
import {LiveStatsComponent} from "./live-feeds/live-stats.component";
import {RevenueComponent} from "./live-feeds/revenue.component";
import {BirdEyeComponent} from './bird-eye/bird-eye.component';
import { TodoWidgetComponent } from './todo-widget/todo-widget.component';
import { TodoListComponent } from './todo-widget/todo-list.component';
import {FlotChartModule} from "@app/shared/graphs/flot-chart/flot-chart.module";
import {D3Module} from "@app/shared/graphs/d3/d3.module";


@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    FlotChartModule,
    D3Module,
  ],
  declarations: [
    HomeComponent,

    LiveFeedsComponent,
    LiveStatsComponent,
    RevenueComponent,
    SocialNetworkComponent,

    BirdEyeComponent,

    TodoWidgetComponent,

    TodoListComponent
  ],
  providers: [],
})
export class HomeModule {

}
