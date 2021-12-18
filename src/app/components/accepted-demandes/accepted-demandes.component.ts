import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/models/response';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-accepted-demandes',
  templateUrl: './accepted-demandes.component.html',
  styleUrls: ['./accepted-demandes.component.css',
  '../../../assets/css/vertical-layout-light/style.css'
]

})
export class AcceptedDemandesComponent implements OnInit {
  demandes! : any;
  constructor(private demandeService : DemandeService) { }

  ngOnInit(): void {
    this.demandeService.findByLibelle('acceptee').subscribe(
      (res : Response) => {
          this.demandes = res.result;
      },
      (err) =>{
        console.log(err);
      }
    );
  }

}
