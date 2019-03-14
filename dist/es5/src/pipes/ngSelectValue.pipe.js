var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
/**
 * Pipe to transform ng select selected option into
 */
var NgSelectValuePipe = /** @class */ (function () {
    function NgSelectValuePipe() {
    }
    //######################### public methods #########################
    /**
     * Transforms selected option into string
     */
    NgSelectValuePipe.prototype.transform = function () {
        return '';
    };
    NgSelectValuePipe = __decorate([
        Pipe({ name: 'ngSelectValue' })
    ], NgSelectValuePipe);
    return NgSelectValuePipe;
}());
export { NgSelectValuePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdTZWxlY3RWYWx1ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3BpcGVzL25nU2VsZWN0VmFsdWUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUVsRDs7R0FFRztBQUVIO0lBQUE7SUFXQSxDQUFDO0lBVEcsb0VBQW9FO0lBRXBFOztPQUVHO0lBQ0kscUNBQVMsR0FBaEI7UUFFSSxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFWUSxpQkFBaUI7UUFEN0IsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBQyxDQUFDO09BQ2pCLGlCQUFpQixDQVc3QjtJQUFELHdCQUFDO0NBQUEsQUFYRCxJQVdDO1NBWFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBQaXBlIHRvIHRyYW5zZm9ybSBuZyBzZWxlY3Qgc2VsZWN0ZWQgb3B0aW9uIGludG9cclxuICovXHJcbkBQaXBlKHtuYW1lOiAnbmdTZWxlY3RWYWx1ZSd9KVxyXG5leHBvcnQgY2xhc3MgTmdTZWxlY3RWYWx1ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtXHJcbntcclxuICAgIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBwdWJsaWMgbWV0aG9kcyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmb3JtcyBzZWxlY3RlZCBvcHRpb24gaW50byBzdHJpbmdcclxuICAgICAqLyAgIFxyXG4gICAgcHVibGljIHRyYW5zZm9ybSgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==