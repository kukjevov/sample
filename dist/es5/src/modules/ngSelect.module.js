/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectValuePipe } from '../pipes/ngSelectValue.pipe';
import { OptGroupComponent } from '../components/option/optgroup.component';
import { OptionComponent } from '../components/option/option.component';
import { NgCommonComponent } from '../components/ngCommon/ngCommon.component';
/**
 * Module for select and its options
 */
var NgSelectModule = /** @class */ (function () {
    function NgSelectModule() {
    }
    NgSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        OptionComponent,
                        OptGroupComponent,
                        NgSelectValuePipe,
                        NgCommonComponent
                    ],
                    exports: [
                        OptionComponent,
                        OptGroupComponent,
                        NgSelectValuePipe,
                        NgCommonComponent
                    ]
                },] }
    ];
    return NgSelectModule;
}());
export { NgSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdTZWxlY3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvbmdTZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7Ozs7QUFLNUU7SUFBQTtJQXVCQSxDQUFDOztnQkF2QkEsUUFBUSxTQUNUO29CQUNJLE9BQU8sRUFDUDt3QkFDSSxZQUFZO3FCQUNmO29CQUNELFlBQVksRUFDWjt3QkFDSSxlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixpQkFBaUI7cUJBQ3BCO29CQUNELE9BQU8sRUFDUDt3QkFDSSxlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixpQkFBaUI7cUJBQ3BCO2lCQUNKOztJQUdELHFCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FGWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtOZ1NlbGVjdFZhbHVlUGlwZX0gZnJvbSAnLi4vcGlwZXMvbmdTZWxlY3RWYWx1ZS5waXBlJztcclxuaW1wb3J0IHtPcHRHcm91cENvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9vcHRpb24vb3B0Z3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtPcHRpb25Db21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvb3B0aW9uL29wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge05nQ29tbW9uQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL25nQ29tbW9uL25nQ29tbW9uLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogTW9kdWxlIGZvciBzZWxlY3QgYW5kIGl0cyBvcHRpb25zXHJcbiAqL1xyXG5ATmdNb2R1bGUoXHJcbntcclxuICAgIGltcG9ydHM6XHJcbiAgICBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOlxyXG4gICAgW1xyXG4gICAgICAgIE9wdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBPcHRHcm91cENvbXBvbmVudCxcclxuICAgICAgICBOZ1NlbGVjdFZhbHVlUGlwZSxcclxuICAgICAgICBOZ0NvbW1vbkNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6XHJcbiAgICBbXHJcbiAgICAgICAgT3B0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIE9wdEdyb3VwQ29tcG9uZW50LFxyXG4gICAgICAgIE5nU2VsZWN0VmFsdWVQaXBlLFxyXG4gICAgICAgIE5nQ29tbW9uQ29tcG9uZW50XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1NlbGVjdE1vZHVsZVxyXG57XHJcbn0iXX0=