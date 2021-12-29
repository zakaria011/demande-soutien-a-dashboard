import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/models/response';
import { DemandeService } from 'src/app/services/demande.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lettre-acceptation',
  templateUrl: './lettre-acceptation.component.html',
  styleUrls: ['./lettre-acceptation.component.css']
})
export class LettreAcceptationComponent implements OnInit {
   id = "2";
  lettreInfos : any;

  constructor(private demandeService : DemandeService, private router : Router) { }

  ngOnInit(): void {
    this.demandeService.getLettre(this.id).subscribe(

      (res : Response) => {
        if(res.status == 200){
          this.lettreInfos = res.result;
          console.log(this.lettreInfos);


          setTimeout(
            ()=> {
              let DATA = document.getElementById('htmlData');
            if(DATA)
            html2canvas(DATA).then(canvas => {

                let fileWidth = 208;
                let fileHeight = canvas.height * fileWidth / canvas.width;

                const FILEURI = canvas.toDataURL('image/png')
                let PDF = new jsPDF('p', 'mm', 'a4');
                let position = 0;
                PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

                PDF.save('lettreAcceptation.pdf');
            });

            //this.router.navigate(['/demandes']);
            },
            7000
          )



        }
      },

      (err) => {
        console.log(err);
      },

      () => {

      }


    )
  }


  isMission() : string {
    if(this.lettreInfos.demande.is_mission){
      return 'mission ou stage';
    }else {
      return 'manifestation scientifique';
    }
  }

}
