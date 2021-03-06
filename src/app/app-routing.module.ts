import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToutesDemandesComponent } from './components/toutes-demandes/toutes-demandes.component';
import { AcceptedDemandesComponent } from './components/accepted-demandes/accepted-demandes.component';
import { RefusedDemandesComponent } from './components/refused-demandes/refused-demandes.component';
import { InfosDemandeursComponent } from './components/infos-demandeurs/infos-demandeurs.component';
import { EtabChartComponent } from './components/etab-chart/etab-chart.component';
import { LoginComponent } from './components/login/login.component';
import { EditDemandeComponent } from './components/edit-demande/edit-demande.component';
import { DemandesEncoursComponent } from './components/demandes-encours/demandes-encours.component';
import { LettreAcceptationComponent } from './components/lettre-acceptation/lettre-acceptation.component';
const ROUTES : Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'demandes', component : ToutesDemandesComponent},
  {path : 'accepted', component : AcceptedDemandesComponent},
  {path : 'refused', component : RefusedDemandesComponent},
  {path : 'infos', component : InfosDemandeursComponent},
  {path : 'chart', component : EtabChartComponent},
  {path : 'login', component : LoginComponent},
  {path : 'edit/:id', component : EditDemandeComponent},
  {path : 'encours', component : DemandesEncoursComponent},
  {path : 'lettreaccep', component : LettreAcceptationComponent},



]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(ROUTES),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
