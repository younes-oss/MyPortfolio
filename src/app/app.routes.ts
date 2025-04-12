import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProposComponent } from './propos/propos.component';
import { ProjetsComponent } from './projets/projets.component';



export const routes: Routes = [
    {path:'accueil',component:AccueilComponent},
    {path:'propos',component:ProposComponent},
    {path:'projets',component:ProjetsComponent}
];

