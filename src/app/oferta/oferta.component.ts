import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'
import {CarrinhoService} from '../carrinho.service'
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {


    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
        //console.log(this.oferta)
      })
  }


  ngOnDestroy() {
  }

  public adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItens(this.oferta)
    console.log(this.carrinhoService.itens)
  }
}
