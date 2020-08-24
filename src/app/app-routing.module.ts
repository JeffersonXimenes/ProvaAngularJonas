import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlocksComponent } from './blocks/blocks.component';
import { FormsComponent } from './forms/forms.component';

 

export const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'home'},
  { path: 'home', component: MainContentComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'blocks', component: BlocksComponent },
  { path: 'forms', component: FormsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
