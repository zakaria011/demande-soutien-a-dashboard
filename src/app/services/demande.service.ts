import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private baseUrl = "http://127.0.0.1:8000/api/demandes/";
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
}
