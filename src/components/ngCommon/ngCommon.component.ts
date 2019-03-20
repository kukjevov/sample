import {Component, ChangeDetectionStrategy} from '@angular/core';

/**
 * Component with ngIf ngFor and ngClass
 */
@Component(
{
    selector: 'component-sample',
    templateUrl: 'ngCommon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgCommonComponent
{
    public condition: boolean = true;

    public arrayObj: string[] = ['prva', 'druha', 'tretia'];

    public ngClassObj = {btn: true, "btn-primary": true};
}