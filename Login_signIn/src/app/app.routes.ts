import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { authGuardGuard } from './guards/auth-guard-guard';
<<<<<<< HEAD
import { Register } from './components/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuardGuard] },
  { path: '**', redirectTo: 'login' }
=======

export const routes: Routes = [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] }
>>>>>>> origin/main
];

