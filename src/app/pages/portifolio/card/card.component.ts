import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activedRoute: ActivatedRoute,
    private navegador: Router
    ){
    this.activedRoute.params.subscribe(res => console.log(res))
    //para recuperar parâmetros de rotas-filhas
    this.activedRoute.firstChild?.params.subscribe(res => console.log(res))
    //query params
    this.activedRoute.queryParams.subscribe(res => console.log(res))
  }

  ngOnInit(): void {
    //redirecionamento para um componente após um intervalo de tempo
    // setInterval(()=>{
    //   this.navegador.navigate(['/'])
    // }, 5000)
  }
}
