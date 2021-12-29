import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private baseUrl = "http://127.0.0.1:8000/api/demandes/";
  private baseUrl2 = "http://127.0.0.1:8000/api/soutiens/";
  constructor(private httpClient : HttpClient) { }

  findAll(){
    return this.httpClient.get<Response>(this.baseUrl);
  }

  findByLibelle(state : string){
    return this.httpClient.get<Response>(this.baseUrl+'findByState/'+state);
  }

  findDetails(id : string){
    return this.httpClient.get<Response>(this.baseUrl+'findDetails/'+id);
  }

  modifySoutien(montants : any){
    return this.httpClient.post<Response>(this.baseUrl2+'modifySoutien',montants);
  }

  Validate(id :string){
    return this.httpClient.post<Response>(this.baseUrl+'validate',{'id' : id});
  }

  Refuse(id : string){
    return this.httpClient.post<Response>(this.baseUrl+'refuse',{'id' : id});
  }

  getLettre(id : string){
    return this.httpClient.get<Response>(this.baseUrl+'getLettre/'+id);
  }


}
