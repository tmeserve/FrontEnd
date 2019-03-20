import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { BackendComponent } from './backend/backend.component';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

const ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' },
  { path: 'backend', component: BackendComponent},
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(ROUTES);