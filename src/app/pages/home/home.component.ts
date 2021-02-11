import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private YT_service: YoutubeService ) { }

  ngOnInit(): void {
    this.YT_service.getVideos()
      .subscribe( resp => {
        console.log( resp );
      })
  }

}
