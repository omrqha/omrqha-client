import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ServiceProvidersCardsComponent } from './service-provider/service-providers-cards.component';
import { ServiceProviderDetailsComponent } from './service-provider-details/service-provider-details.component';
import { DomainComponent } from './domain/domain.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ElasticHeaderDirective } from  '../directives/elastic-header/elastic-header'


@NgModule({
  declarations: [
    LoginFormComponent,
    ServiceProvidersCardsComponent,
    ServiceProviderDetailsComponent,
    DomainComponent,
    ElasticHeaderDirective
  ],
  imports: [IonicModule],
  exports: [
    LoginFormComponent,
    ServiceProvidersCardsComponent,
    ServiceProviderDetailsComponent,
    DomainComponent,
    ElasticHeaderDirective
  ]
})

export class ComponentsModule {

}
