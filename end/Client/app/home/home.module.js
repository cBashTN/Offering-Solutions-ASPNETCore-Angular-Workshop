var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { HomeComponent } from './components/home/home.component';
import { HomeRoutes } from './home.routes';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            RouterModule.forChild(HomeRoutes)
        ],
        declarations: [
            HomeComponent,
        ],
        providers: [],
        exports: [
            HomeComponent
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map