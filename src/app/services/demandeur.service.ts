import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class DemandeurService {

  private baseUrl = "http://127.0.0.1:8000/api/demandeurs";
  constructor(private httpClient : HttpClient) { }

  findAll(){
    return this.httpClient.get<Response>(this.baseUrl);
  }

}
