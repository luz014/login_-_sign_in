import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [];
  private currentUser: User | null = null;

  constructor() {
    this.loadUsers();
    this.loadSession();
  }

  private loadUsers() {
    const data = localStorage.getItem('users');
    this.users = data ? JSON.parse(data) : [];
  }

  private saveUsers(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  
  }

  private loadSession(): void {
    const data = localStorage.getItem('session');
    this.currentUser = data ? JSON.parse(data) : null;
  }

  private saveSession( user: User ): void {
    localStorage.setItem('session', JSON.stringify(user));
  }

  private clearSession(): void {
    localStorage.removeItem('session');
  }

  register(user: User): boolean {
    const exists = this.users.find(u => u.email === user.email);
    if (exists) {
      return false;
    }
    user.id = Date.now();
    this.users.push(user);
    this.saveUsers();
    return true;
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);

    if (!user) {
      return false;
  }

    this.currentUser = user;
    this.saveSession(user);
    return true;
  }

  logout(): void {
    this.currentUser = null;
    this.clearSession();
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

}

