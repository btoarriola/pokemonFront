import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/assets/pokemon.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class contentComponent implements OnInit {
  pokemonList: any[] = [];
  offset: number = 0;
  limit: number = 20;
  totalPokemon: number = 0;


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemonList();
  }
  loadPokemonList(): void {
    this.pokemonService.getPokemonList(this.offset, this.limit).subscribe(
      (data) => {
        this.pokemonList = data;
        this.totalPokemon = data.length;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  nextPage(): void {
    this.offset += this.limit;
    this.loadPokemonList();
  }

  previousPage(): void {
    this.offset -= this.limit;
    if (this.offset < 0) {
      this.offset = 0;
    }
    this.loadPokemonList();
  }


}
