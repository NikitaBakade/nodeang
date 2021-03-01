import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http:HttpClient) { }

  public NodeURL = "http://localhost:5000/";

  selectData(route){
    return this.http.get(this.NodeURL + route);
  }

  
}
