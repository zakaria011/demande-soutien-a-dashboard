import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/models/response';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-refused-demandes',
  templateUrl: './refused-demandes.component.html',
  styleUrls: ['./refused-demandes.component.css',
  '../../../assets/css/vertical-layout-light/style.css',]
})
export class RefusedDemandesComponent implements OnInit {
  demandes! : any;
  constructor(private demandeService : DemandeService) { }

  ngOnInit(): void {

    this.demandeService.findByLibelle("refusee").subscribe(

      (res : Response) => {
          this.demandes = res.result;
      },
      (err) => {
        console.log(err);
      },

      () => {

      }
    )
  }

}
