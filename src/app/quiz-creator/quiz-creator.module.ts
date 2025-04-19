import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizCreatorRoutingModule } from './quiz-creator-routing.module';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    QuizCreatorRoutingModule
  ]
})
export class QuizCreatorModule { }
