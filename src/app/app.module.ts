import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { HeaderComponent } from './components/header/header.component';

import { MyStatsComponent } from './views/my-stats/my-stats.component';
import { TeamStatsComponent } from './views/team-stats/team-stats.component';
import { LeaderboardComponent } from './views/leaderboard/leaderboard.component';

import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    InfoBarComponent,
    HeaderComponent,
    MyStatsComponent,
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
