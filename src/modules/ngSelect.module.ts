import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgSelectValuePipe} from '../pipes/ngSelectValue.pipe';
import {OptGroupComponent} from '../components/option/optgroup.component';
import {OptionComponent} from '../components/option/option.component';

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