import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinQuizComponent } from './join-quiz/join-quiz.component';

const routes: Routes = [
  {path: '', component: JoinQuizComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizParticipantRoutingModule { }
