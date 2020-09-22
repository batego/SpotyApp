import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'Bearer BQAGbkShv0KGqhTnVYLs3DE6Zx9_0akRKreaRU7NXx-NyR6NfXvqulfSgRRagnSIMGXlBf2ZFrRKigjEY3U';

  constructor(private http: HttpClient) {
    // console.log('Service Spotify Up');
  }


  getQuery(query: string): any {
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: this.token
    });

    return this.http.get(URL, { headers });
  }

  getNewReleases(): any {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => {
        return data.albums.items;
      }));
  }

  getArtists(buscador: string): any {

    return this.getQuery(`search?q=${buscador}&type=artist&limit=15`)
      .pipe(map(data => {
        console.log(data);
        return data.artists.items;
      }));
  }

  getArtist(id: string): any{
    return this.getQuery(`artists/${id}`);
  }

  getTopTrackArtist(id: string): any {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map (data => {
      return data.tracks;
    }));
  }
}
