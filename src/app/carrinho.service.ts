
import { ItemCarrinho } from './shared/item-carrinho.model'
import { Oferta } from './shared/oferta.model';

export class CarrinhoService {

    public itens: ItemCarrinho[] = []

    constructor() { }

    public exibirItens(): ItemCarrinho[] {
        return this.itens
    }
    public incluirItens(oferta: Oferta): void {

        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id == oferta.id)

        if (itemCarrinhoEncontrado !== undefined) {
            itemCarrinhoEncontrado.quantidade += 1
        } else {
            let itemCarrinho: ItemCarrinho = new ItemCarrinho(
                oferta.id,
                oferta.imagens[0],
                oferta.titulo,
                oferta.descricao_oferta,
                oferta.valor,
                1)

            this.itens.push(itemCarrinho)
        }
    }
    public totalCarrinhoCompra(): number {
        let total: number = 0

        this.itens.map((item: ItemCarrinho) => { total += (item.valor * item.quantidade) })

        return total
    }

    public adicionarQuantidade(itemCarrinho: ItemCarrinho):void{
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id == itemCarrinho.id)

        if (itemCarrinhoEncontrado !== undefined) {
            itemCarrinhoEncontrado.quantidade += 1
        } 
    }

    public diminuirQuantidade(itemCarrinho: ItemCarrinho): void{
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id == itemCarrinho.id)

        if (itemCarrinhoEncontrado !== undefined) {
            if   (itemCarrinhoEncontrado.quantidade > 0){
                itemCarrinhoEncontrado.quantidade -= 1
            }  
            
            if  (itemCarrinhoEncontrado.quantidade === 0){
                this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado),1)
            }
        } 
    }
}
