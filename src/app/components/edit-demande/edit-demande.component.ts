import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-demande',
  templateUrl: './edit-demande.component.html',
  styleUrls: ['./edit-demande.component.css']
})
export class EditDemandeComponent implements OnInit {
  

  constructor() { }

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
