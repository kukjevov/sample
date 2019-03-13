import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgSelectValuePipe} from '../pipes/ngSelectValue.pipe';
import {OptionComponent, OptGroupComponent} from '../components/option';

/**
 * Module for select and its options
 */
@NgModule(
{
    imports:
    [
        CommonModule
    ],
    declarations:
    [
        OptionComponent,
        OptGroupComponent,
        NgSelectValuePipe
    ],
    exports:
    [
        OptionComponent,
        OptGroupComponent,
        NgSelectValuePipe
    ]
})
export class NgSelectModule
{
}