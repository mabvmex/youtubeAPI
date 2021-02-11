import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private youtubeURL = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyCparuGObDfIp3cjUYQe5zNlqRCHFrZGJ0';
  private playlist = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor( private http: HttpClient) { 

  }


// playlistItems?part=snippet&key=AIzaSyCparuGObDfIp3cjUYQe5zNlqRCHFrZGJ0&playlistId=UUuaPTYj15JSkETGnEseaFFg&maxResults=3

  getVideos() {
    const url = `${this.youtubeURL}/playlistItems`;

    const params = new HttpParams()
    .set('part', 'snippet')
    .set('key', this.apiKey)
    .set('playlistId', this.playlist)
    .set('maxResults', '10')

    return this.http.get(url, { params });
  }

}
