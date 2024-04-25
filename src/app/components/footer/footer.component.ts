import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  workExperience : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let  work1 = {
      fecha: "2018-2022",
      ubicacion: "Ixtac Ver.",
      puesto: "CEO",
      empresa: "Waves Lab",
      logros : [
        { descripcion : "Construccion de un ERP en la nube de google" },
      { descripcion : "Creacion de un cluster en hadoop y spark" }
      ]
    };
  
    let  work2 = {
      fecha: "2014-2018",
      ubicacion: "Orizaba, Ver.",
      puesto: "CEO",
      empresa: "Kubeet",
      logros : [
        { descripcion : "Construccion de un invernadero hidroponico" },
      { descripcion : "Creacion de un dron autonomo"}
      ]
  
    };
  
    let  work3 = {
      fecha: "2010-2014",
      ubicacion: "Orizaba, Ver.",
      puesto: "CEO",
      empresa: "ADESOFT",
      logros : [
        {descripcion : "Construccion de software CFDi"},
      ]
  
    };
  
  
    this.workExperience.push(work1);
    this.workExperience.push(work2);
    this.workExperience.push(work3);
  }

}
