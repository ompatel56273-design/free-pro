import { Routes } from '@angular/router';
import { PhpPageComponent } from './pages/php-page/php-page.component';
import { GenaiPageComponent } from './pages/genai-page/genai-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'php',
    pathMatch: 'full'
  },
  {
    path: 'php',
    component: PhpPageComponent,
    title: 'PHP Practical Solutions | CodeShelf'
  },
  {
    path: 'genai',
    component: GenaiPageComponent,
    title: 'GenAI Practical Solutions | CodeShelf'
  },
  {
    path: '**',
    redirectTo: 'php'
  }
];
