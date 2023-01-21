import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-mostrar-mais',
  templateUrl: './botao-mostrar-mais.component.html',
  styleUrls: ['./botao-mostrar-mais.component.css']
})
export class BotaoMostrarMaisComponent implements OnInit {

 @Input() haMais: boolean= false;

  constructor(){}

  ngOnInit(): void {

  }

}
