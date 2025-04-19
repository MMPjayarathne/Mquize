import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-quiz',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-quiz.component.html',
  styleUrl: './create-quiz.component.css',
})
export class CreateQuizComponent {
  quizForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({
      title: ['', Validators.required],
      questions: this.fb.array([this.createQuestion()]),
    });
  }

  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  createQuestion(): FormGroup {
    return this.fb.group({
      questionText: ['', Validators.required],
      options: this.fb.array([
        this.fb.control('', Validators.required),
        this.fb.control('', Validators.required),
        this.fb.control('', Validators.required),
        this.fb.control('', Validators.required),
      ]),
      correctAnswerIndex: [0, Validators.required],
      timeLimit: [30, Validators.required],
    });
  }

  addQuestion() {
    this.questions.push(this.createQuestion());
  }

  submitQuiz() {
    console.log(this.quizForm.value);
    // Later save to Firebase or backend
  }

  getOptions(question: AbstractControl): AbstractControl[] {
    return (question.get('options') as FormArray).controls;
  }

  removeQuestion(index: number){
    const questions = this.quizForm.get('questions') as FormArray;

    if(questions.length > 1){
      questions.removeAt(index);
    }
  }
  
}
