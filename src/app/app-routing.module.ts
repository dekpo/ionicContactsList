import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-contact',
    loadChildren: () => import('./add-contact/add-contact.module').then( m => m.AddContactPageModule)
  },
  {
    path: 'update-contact/:id',
    loadChildren: () => import('./add-contact/add-contact.module').then( m => m.AddContactPageModule)
  },
  {
    path: 'entreprises',
    loadChildren: () => import('./entreprises/entreprises.module').then( m => m.EntreprisesPageModule)
  },
  {
    path: 'add-entreprise',
    loadChildren: () => import('./add-entreprise/add-entreprise.module').then( m => m.AddEntreprisePageModule)
  },
  {
    path: 'update-entreprise/:id',
    loadChildren: () => import('./add-entreprise/add-entreprise.module').then( m => m.AddEntreprisePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
