import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ServiceProvidersCardsComponent } from './service-provider/service-providers-cards.component';
import { ServiceProviderDetailsComponent } from './service-provider-details/service-provider-details.component';
import { DomainComponent } from './domain/domain.component';
import { SubDomainComponent } from './sub-domain/sub-domain.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ElasticHeaderDirective } from  '../directives/elastic-header/elastic-header'
import { Ionic2RatingModule } from 'ionic2-rating';


@NgModule({
  declarations: [
    LoginFormComponent,
    ServiceProvidersCardsComponent,
    ServiceProviderDetailsComponent,
    DomainComponent,
    SubDomainComponent,
    ElasticHeaderDirective,
    CarouselComponent
  ],
  imports: [IonicModule,Ionic2RatingModule],
  exports: [
    LoginFormComponent,
    ServiceProvidersCardsComponent,
    ServiceProviderDetailsComponent,
    DomainComponent,
    SubDomainComponent,
    ElasticHeaderDirective,
    CarouselComponent,
    Ionic2RatingModule
  ]
})

export class ComponentsModule {

}
