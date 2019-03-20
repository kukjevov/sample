/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
/**
 * Component with ngIf ngFor and ngClass
 */
export class NgCommonComponent {
    constructor() {
        this.condition = true;
        this.arrayObj = ['prva', 'druha', 'tretia'];
        this.ngClassObj = { btn: true, "btn-primary": true };
    }
}
NgCommonComponent.decorators = [
    { type: Component, args: [{
                selector: 'component-sample',
                template: "<div *ngIf=\"condition\">conditional div</div>\r\n<div *ngFor=\"let itm of arrayObj\">itm: '{{itm}}'</div>\r\n<button [ngClass]=\"ngClassObj\"></button>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
if (false) {
    /** @type {?} */
    NgCommonComponent.prototype.condition;
    /** @type {?} */
    NgCommonComponent.prototype.arrayObj;
    /** @type {?} */
    NgCommonComponent.prototype.ngClassObj;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdDb21tb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbmdDb21tb24vbmdDb21tb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLHVCQUF1QixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBV2pFLE1BQU0sT0FBTyxpQkFBaUI7SUFOOUI7UUFRVyxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQVEsR0FBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFakQsZUFBVSxHQUFHLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBYkEsU0FBUyxTQUNWO2dCQUNJLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLG9LQUFzQztnQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDbEQ7Ozs7SUFHRyxzQ0FBaUM7O0lBRWpDLHFDQUF3RDs7SUFFeEQsdUNBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgd2l0aCBuZ0lmIG5nRm9yIGFuZCBuZ0NsYXNzXHJcbiAqL1xyXG5AQ29tcG9uZW50KFxyXG57XHJcbiAgICBzZWxlY3RvcjogJ2NvbXBvbmVudC1zYW1wbGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICduZ0NvbW1vbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdDb21tb25Db21wb25lbnRcclxue1xyXG4gICAgcHVibGljIGNvbmRpdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHVibGljIGFycmF5T2JqOiBzdHJpbmdbXSA9IFsncHJ2YScsICdkcnVoYScsICd0cmV0aWEnXTtcclxuXHJcbiAgICBwdWJsaWMgbmdDbGFzc09iaiA9IHtidG46IHRydWUsIFwiYnRuLXByaW1hcnlcIjogdHJ1ZX07XHJcbn0iXX0=