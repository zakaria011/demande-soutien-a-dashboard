import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/models/response';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-demandes-encours',
  templateUrl: './demandes-encours.component.html',
  styleUrls: ['./demandes-encours.component.css']
})
export class DemandesEncoursComponent implements OnInit {

  demandes! : any;
  constructor(private demandeService : DemandeService) { }

  ngOnInit(): void {

    this.demandeService.findByLibelle('en cours').subscribe(
      (res : Response) => {
        this.demandes = res.result;
        console.log(res.result);
      },

      (err) => {
        console.log(err);
      },

      () => {

      }
    )
  }

}
