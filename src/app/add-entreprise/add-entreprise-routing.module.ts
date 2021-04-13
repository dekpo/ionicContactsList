import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEntreprisePage } from './add-entreprise.page';

const routes: Routes = [
  {
    path: '',
    component: AddEntreprisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEntreprisePageRoutingModule {}
