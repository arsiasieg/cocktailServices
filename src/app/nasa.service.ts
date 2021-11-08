import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http:HttpClient) { }

  public getImageOfTheDay(): Observable<any>{
    return this.http.get<any>('https://api.nasa.gov/planetary/apod?api_key=YaTmCF3EAsgLVAYyZnd0KRgKwZ3OpMLJxVLuPm4N')
  }
}
