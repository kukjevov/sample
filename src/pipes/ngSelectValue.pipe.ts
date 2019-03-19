import {Pipe, PipeTransform} from '@angular/core';

/**
 * Pipe to transform ng select selected option into
 */
@Pipe({name: 'ngSelectValue'})
export class NgSelectValuePipe<TValue> implements PipeTransform
{
    //######################### public methods #########################
    
    /**
     * Transforms selected option into string
     */   
    public transform(): TValue
    {
        return null;
    }
}

