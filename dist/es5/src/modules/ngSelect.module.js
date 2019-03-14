var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectValuePipe } from '../pipes/ngSelectValue.pipe';
import { OptionComponent, OptGroupComponent } from '../components/option';
/**
 * Module for select and its options
 */
var NgSelectModule = /** @class */ (function () {
    function NgSelectModule() {
    }
    NgSelectModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                OptionComponent,
                OptGroupComponent,
                NgSelectValuePipe
            ],
            exports: [
                OptionComponent,
                OptGroupComponent,
                NgSelectValuePipe
            ]
        })
    ], NgSelectModule);
    return NgSelectModule;
}());
export { NgSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdTZWxlY3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvbmdTZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBQyxlQUFlLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RTs7R0FFRztBQW9CSDtJQUFBO0lBRUEsQ0FBQztJQUZZLGNBQWM7UUFuQjFCLFFBQVEsQ0FDVDtZQUNJLE9BQU8sRUFDUDtnQkFDSSxZQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQ1o7Z0JBQ0ksZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLGlCQUFpQjthQUNwQjtZQUNELE9BQU8sRUFDUDtnQkFDSSxlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsaUJBQWlCO2FBQ3BCO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FFMUI7SUFBRCxxQkFBQztDQUFBLEFBRkQsSUFFQztTQUZZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge05nU2VsZWN0VmFsdWVQaXBlfSBmcm9tICcuLi9waXBlcy9uZ1NlbGVjdFZhbHVlLnBpcGUnO1xyXG5pbXBvcnQge09wdGlvbkNvbXBvbmVudCwgT3B0R3JvdXBDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvb3B0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBNb2R1bGUgZm9yIHNlbGVjdCBhbmQgaXRzIG9wdGlvbnNcclxuICovXHJcbkBOZ01vZHVsZShcclxue1xyXG4gICAgaW1wb3J0czpcclxuICAgIFtcclxuICAgICAgICBDb21tb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6XHJcbiAgICBbXHJcbiAgICAgICAgT3B0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIE9wdEdyb3VwQ29tcG9uZW50LFxyXG4gICAgICAgIE5nU2VsZWN0VmFsdWVQaXBlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czpcclxuICAgIFtcclxuICAgICAgICBPcHRpb25Db21wb25lbnQsXHJcbiAgICAgICAgT3B0R3JvdXBDb21wb25lbnQsXHJcbiAgICAgICAgTmdTZWxlY3RWYWx1ZVBpcGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nU2VsZWN0TW9kdWxlXHJcbntcclxufSJdfQ==