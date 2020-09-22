import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styles: [
  ]
})
export class SeachComponent implements OnInit {

  songs: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(buscador: string): any {
    // console.log(buscador);
    this.loading = true;
    this.spotify.getArtists(buscador)
      .subscribe((data) => {
        console.log(data);
        this.songs = data;
        this.loading = false;
      });
  }

}
