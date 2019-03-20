import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgSelectValuePipe} from '../pipes/ngSelectValue.pipe';
import {OptGroupComponent} from '../components/option/optgroup.component';
import {OptionComponent} from '../components/option/option.component';
import {NgCommonComponent} from '../components/ngCommon/ngCommon.component';

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
        NgSelectValuePipe,
        NgCommonComponent
    ],
    exports:
    [
        OptionComponent,
        OptGroupComponent,
        NgSelectValuePipe,
        NgCommonComponent
    ]
})
export class NgSelectModule
{
}