import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private baseUrl = "http://127.0.0.1:8000/api/";
  constructor(private httpClient : HttpClient) { }


  findByDemdeur(id : any){
    return this.httpClient.get<Response>(this.baseUrl+'files/getFilesByDemandeur/'+id);
  }
}
