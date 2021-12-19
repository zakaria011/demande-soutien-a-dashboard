import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-demande',
  templateUrl: './edit-demande.component.html',
  styleUrls: ['./edit-demande.component.css']
})
export class EditDemandeComponent implements OnInit {
  title = 'appBootstrap';
  
  closeResult: string = '';
  constructor(private modalService: NgbModal) {}
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

}
