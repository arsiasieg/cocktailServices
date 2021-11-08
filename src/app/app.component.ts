import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public imgOfTheDay: string | SafeResourceUrl |undefined
  public imgTitle: string | undefined
  public imgUrl: string | undefined
  public imgDate: string | undefined
  public imgExplanation: string | undefined

  constructor(private nasaService: NasaService, private sanitizer: DomSanitizer){
  }

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((image: any) => {
      // this.imgOfTheDay = this.sanitizer.bypassSecurityTrustHtml(image.url);
      this.imgOfTheDay =image.url;
      this.imgTitle = image.title;
      this.imgUrl = image.url;
      this.imgDate = image.date;
      this.imgExplanation = image.explanation;
    })
  }
}


