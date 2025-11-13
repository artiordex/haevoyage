/**
 * Type definitions for the Haevoyage application
 */

export interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  category?: string;
  createdAt?: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  createdAt: string;
}

export interface UserProgress {
  userId: number;
  challengesCompleted: number;
  currentStreak: number;
  totalPoints: number;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}
