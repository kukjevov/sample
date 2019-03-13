import {Pipe, PipeTransform} from '@angular/core';

/**
 * Pipe to transform ng select selected option into
 */
@Pipe({name: 'ngSelectValue'})
export class NgSelectValuePipe implements PipeTransform
{
    //######################### public methods #########################
    
    /**
     * Transforms selected option into string
     */   
    public transform(): string
    {
        return '';
    }
}

