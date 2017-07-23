import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ServiceProvidersCardsComponent } from './service-provider/service-providers-cards.component';
import { DomainComponent } from './domain/domain.component';

@NgModule({
  declarations: [
    ServiceProvidersCardsComponent,
    DomainComponent
  ],
  imports: [IonicModule],
  exports: [
    ServiceProvidersCardsComponent,
    DomainComponent
  ]
})

export class ComponentsModule {

}
