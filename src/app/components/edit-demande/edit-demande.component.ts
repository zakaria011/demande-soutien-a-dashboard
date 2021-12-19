import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ActivatedRoute } from '@angular/router';
import { DemandeService } from 'src/app/services/demande.service';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-edit-demande',
  templateUrl: './edit-demande.component.html',
  styleUrls: ['./edit-demande.component.css']
})
export class EditDemandeComponent implements OnInit {
  title = 'appBootstrap';
  demandeDetails! : any;
  is_prof! : boolean;
  is_miss!:boolean;
  closeResult: string = '';
  constructor(private modalService: NgbModal,private activatedRoute : ActivatedRoute,
            private demandeService : DemandeService
    ) {}
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
    let id = this.activatedRoute.snapshot.params.id;
    this.demandeService.findDetails(id).subscribe(
      (res : Response) => {
        this.demandeDetails = res.result;
        this.is_prof = res.result.is_professeur;
        this.is_miss = res.result.is_mission;
        console.log(this.demandeDetails);
        console.log(res.result.is_mission);
        console.log(res.result.is_professeur);
      },
      (err) => {
        console.log(err);
      }
    )

  }
  refusedchanges(){
    Swal.fire({
      title: 'Etes-vous sur  de refuser cette demande?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Refuser!',
      cancelButtonText: 'Non,Cancel'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          ' Refusée!',
          'Cette demande a été refusée.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Vous pouvez revenir :)',
          'error'
        )
      }
    })
  }
  validchanges(){
    Swal.fire({
      title: 'Etes-vous sur  de valider cette demande?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Valider!',
      cancelButtonText: 'Non,Cancel'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          ' Validée!',
          'Cette demande a été validée.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Vous pouvez revenir :)',
          'error'
        )
      }
    })
  }
  public openPDF():void {
    let DATA = document.getElementById('htmlData');
    if(DATA)
    html2canvas(DATA).then(canvas => {

        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;

        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

        PDF.save('demande.pdf');
    });
    }


    public isProfesseur() : string{
      if (this.demandeDetails.is_professeur)
        return "Enseignant chercheur";
      else
          return "Doctorant";
    }
    public isOfficiel() : string{
      if (this.demandeDetails.is_officiel)
        return "Oui";
      else
          return "Non";
    }

}
