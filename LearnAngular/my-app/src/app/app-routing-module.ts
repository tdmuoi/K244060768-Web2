import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductHttpHandleErrorServiceComponent } from './product-http-handle-error-service-component/product-http-handle-error-service-component';
import { ServiceProductImageEvent } from './BTVN/Bai13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './BTVN/Bai13/service-product-image-event-detail/service-product-image-event-detail';
import { Catalog } from './BTVN/Bai14/catalog/catalog';
import { ProductDetailComponent } from './product-detail-component/product-detail-component';

const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'contact', component: Contact },
  { path: 'binding-property-component', component: BindingPropertyComponent },
  { path: 'binding-class-component', component: BindingClassComponent },
  { path: 'binding-style-component', component: BindingStyleComponent },
  { path: 'binding-event-component', component: BindingEventComponent },
  { path: 'binding-two-way-component', component: BindingTwoWayComponent },
  { path: 'product-list-component', component: ProductListComponent },
  { path: 'component-interaction', component: ComponentInteractionComponent },
  { path: 'product-dropdown-list-component', component: ProductDropdownListComponent },
  { path: 'product-list-call-service-component', component: ProductListCallServiceComponent },
  { path: 'product-list-call-http-service-component', component: ProductListCallHttpServiceComponent },
  { path: 'product-http-handle-error-service-component', component: ProductHttpHandleErrorServiceComponent },
  { path: 'service-product-image-event', component: ServiceProductImageEvent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetail },
  { path: 'catalog', component: Catalog },
  { path: 'product-detail/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
