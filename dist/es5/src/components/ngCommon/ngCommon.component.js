/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
/**
 * Component with ngIf ngFor and ngClass
 */
var NgCommonComponent = /** @class */ (function () {
    function NgCommonComponent() {
        this.condition = true;
        this.arrayObj = ['prva', 'druha', 'tretia'];
        this.ngClassObj = { btn: true, "btn-primary": true };
    }
    NgCommonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'component-sample',
                    template: "<div *ngIf=\"condition\">conditional div</div>\r\n<div *ngFor=\"let itm of arrayObj\">itm: '{{itm}}'</div>\r\n<button [ngClass]=\"ngClassObj\"></button>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    return NgCommonComponent;
}());
export { NgCommonComponent };
if (false) {
    /** @type {?} */
    NgCommonComponent.prototype.condition;
    /** @type {?} */
    NgCommonComponent.prototype.arrayObj;
    /** @type {?} */
    NgCommonComponent.prototype.ngClassObj;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdDb21tb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbmdDb21tb24vbmdDb21tb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLHVCQUF1QixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBS2pFO0lBQUE7UUFRVyxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQVEsR0FBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFakQsZUFBVSxHQUFHLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBYkEsU0FBUyxTQUNWO29CQUNJLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLG9LQUFzQztvQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2xEOztJQVFELHdCQUFDO0NBQUEsQUFiRCxJQWFDO1NBUFksaUJBQWlCOzs7SUFFMUIsc0NBQWlDOztJQUVqQyxxQ0FBd0Q7O0lBRXhELHVDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHdpdGggbmdJZiBuZ0ZvciBhbmQgbmdDbGFzc1xyXG4gKi9cclxuQENvbXBvbmVudChcclxue1xyXG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtc2FtcGxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnbmdDb21tb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nQ29tbW9uQ29tcG9uZW50XHJcbntcclxuICAgIHB1YmxpYyBjb25kaXRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBhcnJheU9iajogc3RyaW5nW10gPSBbJ3BydmEnLCAnZHJ1aGEnLCAndHJldGlhJ107XHJcblxyXG4gICAgcHVibGljIG5nQ2xhc3NPYmogPSB7YnRuOiB0cnVlLCBcImJ0bi1wcmltYXJ5XCI6IHRydWV9O1xyXG59Il19