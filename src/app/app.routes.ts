import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'create', loadChildren: () => import('./quiz-creator/quiz-creator.module').then(m => m.QuizCreatorModule)},
    {path: 'join', loadChildren: () => import('./quiz-participant/quiz-participant.module').then(m => m.QuizParticipantModule)},
    { path: 'leaderboard', loadChildren: () => import('./leaderboard/leaderboard.module').then(m => m.LeaderboardModule) },
    { path: '', redirectTo: '/create', pathMatch: 'full' }
];
