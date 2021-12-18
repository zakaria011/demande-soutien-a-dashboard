import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/models/response';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-toutes-demandes',
  templateUrl: './toutes-demandes.component.html',
  styleUrls: ['./toutes-demandes.component.css',
  '../../../assets/css/vertical-layout-light/style.css']
})
export class ToutesDemandesComponent implements OnInit {
  demandes! : any;
  constructor(private demandeService : DemandeService) { }

  ngOnInit(): void {
    this.demandeService.findAll().subscribe(
      (res : Response) => {
        this.demandes = res.result;
      },
      (err) => {
        console.log(err);
      }
    )

  }

}
