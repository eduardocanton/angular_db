import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = [];

  token:any = "Bearer BQC3qWehGDlo4PYb_r_dMxpvQrE7eWpVlV6G0Vw1GLrPQRmUUmMtOKDDz8Kqu75dBDue_fyQxdpf5a2GwJCDVA";

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  constructor( private http:Http) { }

  getArtistas(termino:string){

      let headers = new Headers();
      headers.append('authorization',this.token);

      let query = `?q=${termino}&type=artist`;
      let url = this.urlBusqueda + query;

      return this.http.get(url, {headers})
        .map( res=>{

          this.artistas = res.json().artists.items;
          console.log(res.json().artists);
          return res.json().artists.items;

        })
  }
  getArtista(id:string){

      let headers = new Headers();
      headers.append('authorization',this.token);

      let query = `/${id}`;
      let url = this.urlArtista + query;

      return this.http.get(url, {headers})
        .map( res=>{

          // this.artistas = res.json().artists.items;
          console.log(res.json());
          return res.json();
          // return res.json().artists.items;

        })
    }
    getTop(id:string){

        let headers = new Headers();
        headers.append('authorization','Bearer BQC95EYn5kJji3btrnshOF8to9h40O8Xo-MlyHMfqkp--yA_20VRhYklo33nTaGe9HO-fxKdRvoD4EuhshtRRQ');

        let query = `/${id}/top-tracks?country=ES`;
        let url = this.urlArtista + query;

        return this.http.get(url, {headers})
          .map( res=>{
            console.log(res.json().tracks);
            return res.json().tracks;

          })
      }
}
