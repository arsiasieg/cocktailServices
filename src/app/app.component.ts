import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public imgOfTheDay: string |undefined
  public imgTitle: string | undefined
  public imgUrl: string | undefined
  public imgDate: string | undefined
  public imgExplanation: string | undefined

  constructor(private nasaService: NasaService){
  }

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((apod: any) => {
      this.imgOfTheDay = apod.url;
      this.imgTitle = apod.title;
      this.imgUrl = apod.url;
      this.imgDate = apod.date;
      this.imgExplanation = apod.explanation;
    })
  }
}


