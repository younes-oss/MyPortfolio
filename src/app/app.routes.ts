import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProposComponent } from './propos/propos.component';



export const routes: Routes = [
    {path:'accueil',component:AccueilComponent},
    {path:'propos',component:ProposComponent},
];

