import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-infos-demandeurs',
  templateUrl: './infos-demandeurs.component.html',
  styleUrls: ['./infos-demandeurs.component.css',
  '../../../assets/css/vertical-layout-light/style.css'
]
})
export class InfosDemandeursComponent implements OnInit {
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  ngOnInit(): void {

  }

}
