import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.route.params.subscribe(params => {
      // console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit(): void {
  }

  getArtista(id: string): any {

    this.loading = true;

    this.spotify.getArtist(id)
      .subscribe(arg => {
        console.log(arg);
        this.artista = arg;
        this.loading = false;
      });
  }

  getTopTracks(id: string): any {

    this.spotify.getTopTrackArtist(id)
      .subscribe(arg => {
        console.log(arg);
        this.topTracks = arg;
      });
  }

}
