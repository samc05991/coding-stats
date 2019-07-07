import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodingStatsComponent } from './coding-stats/coding-stats.component';
import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'team-stats', component: TeamStatsComponent },
  { path: 'my-stats', component: CodingStatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
