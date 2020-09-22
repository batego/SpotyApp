import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newSingle: any[] = [];
  loading: boolean;

  error: boolean;
  msgError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newSingle = data;
      this.loading = false;
      // console.log(this.newSingle);
    }, (err) => {
      this.loading = false;
      this.error = true;
      this.msgError = err.error.error.message;
      // console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
