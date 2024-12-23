import { Component } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
  },
  {
    path:'home',
    loadChildren: () => import('./modules/counter/counter.module').then((m) => m.CounterModule)
  }
];

