import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ToutesDemandesComponent } from './components/toutes-demandes/toutes-demandes.component';
import { AcceptedDemandesComponent } from './components/accepted-demandes/accepted-demandes.component';
import { RefusedDemandesComponent } from './components/refused-demandes/refused-demandes.component';
import { InfosDemandeursComponent } from './components/infos-demandeurs/infos-demandeurs.component';
import { EtabChartComponent } from './components/etab-chart/etab-chart.component';
import { LoginComponent } from './components/login/login.component';
import { EditDemandeComponent } from './components/edit-demande/edit-demande.component';
import { HttpClientModule } from '@angular/common/http';
import { InprogressDemandesComponent } from './components/inprogress-demandes/inprogress-demandes.component';
import { DataTablesModule } from 'angular-datatables';
import { DemandesEncoursComponent } from './components/demandes-encours/demandes-encours.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LettreAcceptationComponent } from './components/lettre-acceptation/lettre-acceptation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ToutesDemandesComponent,
    AcceptedDemandesComponent,
    RefusedDemandesComponent,
    InfosDemandeursComponent,
    EtabChartComponent,
    LoginComponent,
    EditDemandeComponent,
    InprogressDemandesComponent,
    DemandesEncoursComponent,
    LettreAcceptationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
