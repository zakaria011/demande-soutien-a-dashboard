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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
