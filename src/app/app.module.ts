import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { HeaderComponent } from './header/header.component';
import { CodingStatsComponent } from './coding-stats/coding-stats.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    InfoBarComponent,
    HeaderComponent,
    CodingStatsComponent,
    TeamStatsComponent,
    LeaderboardComponent,
    BarChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
