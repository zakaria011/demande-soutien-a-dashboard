import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Response } from 'src/app/models/response';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-infos-demandeurs',
  templateUrl: './infos-demandeurs.component.html',
  styleUrls: ['./infos-demandeurs.component.css',
  '../../../assets/css/vertical-layout-light/style.css'
]
})
export class InfosDemandeursComponent implements OnInit {
  title = 'appBootstrap';
  demandeurs! : any;
  closeResult: string = '';
  constructor(private modalService: NgbModal, private demandeurService : DemandeService) {}
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
      this.demandeurService.findAll().subscribe(
        (res : Response)=>{
          if(res.status == 200){
            this.demandeurs = res.result;
          }
        },

        (err) => {
          console.log(err);
        },

        () => {

        }
      )
  }

  getFonction(fonction : number) : string{
    if(fonction){
      return "Enseignant chercheur";
    }else
      return "Doctorant";
  }

}
