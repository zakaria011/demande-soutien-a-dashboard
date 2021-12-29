import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from 'src/app/services/demande.service';
import { Response } from 'src/app/models/response';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-edit-demande',
  templateUrl: './edit-demande.component.html',
  styleUrls: ['./edit-demande.component.css']
})
export class EditDemandeComponent implements OnInit {
  title = 'appBootstrap';
  demandeDetails! : any;
  montants! : any;
  is_prof! : boolean;
  is_miss!:boolean;
  files!: any;
  closeResult: string = '';
  editAction! : FormGroup;
  constructor(private modalService: NgbModal,private activatedRoute : ActivatedRoute,
            private demandeService : DemandeService, private router : Router,
            private formBuilder : FormBuilder,private fileService : FileService
    ) {

        this.editAction = formBuilder.group(
          {
            montantTransport : ['',Validators.required],
            montantInscription : ['',Validators.required],
            montantHeberegement : ['',Validators.required],
            autreMontant : ['',Validators.required]
          }
        )
    }

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
        this.demandeDetails = res.result.demande;
        this.montants = res.result.motants;
        this.is_prof = res.result.is_professeur;
        this.is_miss = res.result.is_mission;
        console.log(this.demandeDetails);
        console.log("sdsdsjdsd");
        console.log(this.demandeDetails.demandeId);

      },
      (err) => {
        console.log(err);
      }
    )

    this.fileService.findByDemdeur(id).subscribe(
      (res : Response) => {
        if(res.status == 200){
          this.files = res.result;
          console.log(this.files);
        }
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
        this.demandeService.Refuse(this.demandeDetails.demandeId).subscribe(
          (res : Response) => {
            console.log(res);
            Swal.fire(
              ' Refusée!',
              'Cette demande a été refusée.',
              'success'
            )

            this.router.navigate(['/refused']);

          },

          (err) => {
            console.log(err);
          },

          () => {

          }

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
        this.demandeService.Validate(this.demandeDetails.demandeId).subscribe(
          (res : Response)=> {
            console.log(res);

            Swal.fire(
            ' Validée!',
            'Cette demande a été validée.',
            'success'
            )

            this.router.navigate(['/accepted']);
          },

          (err) => {
            console.log(err);
          },

          () => {

          }

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

    public getTitle() : string {
      if(this.demandeDetails.is_mission){
        return "Mission ou Stage";
      }else {
        return "Manifestation scientifique";
      }
    }

    public isBeneficie(): string {
      if(this.demandeDetails.is_beneficie){
        return "Oui"
      }else
        return "Non";
    }

    public isFinance() : string  {
      if(this.demandeDetails.is_rem)
        return "Oui";
      else
        return "Non";
    }



    public modifySoutien(){
      const montants = {
        soutienId : this.demandeDetails.soutienId,
        ...this.editAction.getRawValue()
      }
      console.log(montants);
      Swal.fire({
        title: 'Etes-vous sur de modifier les montants saisis de cette demande?',

        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, Valider!',
        cancelButtonText: 'Non,Cancel'
      }).then((result) => {
        if (result.value) {
          this.demandeService.modifySoutien(montants).subscribe(
            (res : Response)=> {
              console.log(res);
              if(res.status== 200){
                Swal.fire(
                  ' Validée!',
                  'L\'opération a été validée.',
                  'success'
              )
                this.router.navigate(['/edit',this.demandeDetails.demandeId])
              }
            },

            (err) => {
              console.log(err);
            },

            () => {

            }

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

}
