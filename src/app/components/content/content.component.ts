import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class contentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'image', 'name'];
  data: any[]=[];
  totalPokemon: number = 0;
  pageSize = 20;
  pageIndex = 0;
  

  constructor(private pokemonService: PokemonService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getPokemonCount();
  }

  getPokemonCount (): void{
    this.pokemonService.getPokemonCount().subscribe(
      (data) => {
        this.totalPokemon=data.count;
        console.log("count",this.totalPokemon);
        this.loadPokemonList();
      },
      (error) => {
        console.log(error);
      });
  }

  loadPokemonList(): void {
    console.log("load",this.totalPokemon);
    let pokemonList;
    for (let i=1; i<=50/*this.totalPokemon*/;i++){
      this.pokemonService.getPokemonList(i).subscribe(
        (data) => {
          pokemonList={
            id : i,
            image: data.sprites.front_default,
            name: data.name
          };
          this.data.push(pokemonList);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
  }
  getPaginatedData(): any[] {
    const startIndex = this.pageIndex * this.pageSize;
    return this.data.slice(startIndex, startIndex + this.pageSize);
  }

  openDialog(pokemon: any) {
    console.log(pokemon);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: pokemon
    });
  }
  
}

