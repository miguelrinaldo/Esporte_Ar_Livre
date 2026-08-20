import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta-component/atleta-component';
import { AtletaListaComponent } from './component/listar-component/listar-component';
import { CorridaComponent } from './component/corrida-component/corrida-component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:"/home",
        pathMatch: 'full'
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"cadastroatleta",
        component:AtletaComponent
    },
    {
        path:"cadastroatleta/:id",
        component:AtletaComponent
    },
    {
        path:"listaatleta",
        component:AtletaListaComponent
    },
    {
        path:"cadastrocorrida",
        component:CorridaComponent
    },
    {
        path: "alterarcorrida/:id",
       component: CorridaComponent
    }
    ]