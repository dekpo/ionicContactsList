import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEntreprisePageRoutingModule } from './add-entreprise-routing.module';

import { AddEntreprisePage } from './add-entreprise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEntreprisePageRoutingModule
  ],
  declarations: [AddEntreprisePage]
})
export class AddEntreprisePageModule {}
