import { Injectable } from '@angular/core';
import { appConfig } from '../app.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api_url = "http://localhost:8000"
  constructor(private httpClient:HttpClient) { }

  get_data(){
    return this.httpClient.get(this.api_url)
  }

}
