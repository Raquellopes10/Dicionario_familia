import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import{Toolbar} from './pages/toolbar/toolbar';
import { Dicionario } from './pages/dicionario/dicionario';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'toolbar', component: Toolbar },
    { path: 'dicionario', component: Dicionario }
];
