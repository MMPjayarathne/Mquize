import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardViewComponent } from './leaderboard-view/leaderboard-view.component';

const routes: Routes = [
  {path: '', component: LeaderboardViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderboardRoutingModule { }
