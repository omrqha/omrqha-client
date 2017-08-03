import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ServiceProvidersCardsComponent } from './service-provider/service-providers-cards.component';
import { ServiceProviderDetailsComponent } from './service-provider-details/service-provider-details.component';
import { DomainComponent } from './domain/domain.component';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [
    LoginFormComponent,
    ServiceProvidersCardsComponent,
    ServiceProviderDetailsComponent,
    DomainComponent
  ],
  imports: [IonicModule],
  exports: [
    LoginFormComponent,
    ServiceProvidersCardsComponent,
    ServiceProviderDetailsComponent,
    DomainComponent
  ]
})

export class ComponentsModule {

}
