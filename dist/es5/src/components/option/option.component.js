var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
/**
 * Component used for options in select component
 */
var OptionComponent = /** @class */ (function () {
    function OptionComponent() {
        //######################### public properties - template bindings #########################
        /**
         * Indication whether is item active
         */
        this.active = false;
        /**
         * Indication whether this option is selected
         */
        this.selected = false;
        //######################### public properties #########################
        /**
         * If specified this option will be displayed in group
         */
        this.group = null;
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], OptionComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], OptionComponent.prototype, "text", void 0);
    OptionComponent = __decorate([
        Component({
            selector: 'ng-select option',
            template: '',
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], OptionComponent);
    return OptionComponent;
}());
export { OptionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL29wdGlvbi9vcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSXhFOztHQUVHO0FBT0g7SUFOQTtRQVFJLDJGQUEyRjtRQUUzRjs7V0FFRztRQUNJLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFL0I7O1dBRUc7UUFDSSxhQUFRLEdBQVksS0FBSyxDQUFDO1FBZ0JqQyx1RUFBdUU7UUFFdkU7O1dBRUc7UUFDSSxVQUFLLEdBQVcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFkRztRQURDLEtBQUssRUFBRTs7a0RBQ2E7SUFNckI7UUFEQyxLQUFLLEVBQUU7O2lEQUNZO0lBMUJYLGVBQWU7UUFOM0IsU0FBUyxDQUNWO1lBQ0ksUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsRUFBRTtZQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2xELENBQUM7T0FDVyxlQUFlLENBa0MzQjtJQUFELHNCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0FsQ1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQge05nU2VsZWN0T3B0aW9ufSBmcm9tIFwiLi9vcHRpb24uaW50ZXJmYWNlXCI7XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IHVzZWQgZm9yIG9wdGlvbnMgaW4gc2VsZWN0IGNvbXBvbmVudFxyXG4gKi9cclxuQENvbXBvbmVudChcclxue1xyXG4gICAgc2VsZWN0b3I6ICduZy1zZWxlY3Qgb3B0aW9uJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25Db21wb25lbnQ8VFZhbHVlPiBpbXBsZW1lbnRzIE5nU2VsZWN0T3B0aW9uPFRWYWx1ZT5cclxue1xyXG4gICAgLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIHB1YmxpYyBwcm9wZXJ0aWVzIC0gdGVtcGxhdGUgYmluZGluZ3MgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGlvbiB3aGV0aGVyIGlzIGl0ZW0gYWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRpb24gd2hldGhlciB0aGlzIG9wdGlvbiBpcyBzZWxlY3RlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgcHVibGljIHByb3BlcnRpZXMgLSBpbnB1dHMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsdWUgdGhhdCB3aWxsIGJlIHVzZWQgaWYgdGhpcyBvcHRpb24gd2lsbCBiZSBzZWxlY3RlZFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIHZhbHVlOiBUVmFsdWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUZXh0IHRoYXQgaXMgZGlzcGxheWVkIGlmIHRoaXMgdmFsdWUgaXMgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcbiAgICBcclxuICAgIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBwdWJsaWMgcHJvcGVydGllcyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBzcGVjaWZpZWQgdGhpcyBvcHRpb24gd2lsbCBiZSBkaXNwbGF5ZWQgaW4gZ3JvdXBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdyb3VwOiBzdHJpbmcgPSBudWxsO1xyXG59Il19