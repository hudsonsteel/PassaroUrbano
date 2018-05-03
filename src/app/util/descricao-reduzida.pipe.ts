import {PipeTransform, Pipe} from '@angular/core'

@Pipe({
    name: 'discricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {

    transform(value: string, numberTruncate: number) : string {
        if (value.length > numberTruncate){
            return value.substr(0,numberTruncate) + '...'
        }

        return value
    }
}