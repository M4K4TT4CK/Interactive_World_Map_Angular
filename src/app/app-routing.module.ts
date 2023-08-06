import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldMapComponent } from './components/worldMap/worldMap.component';

const routes: Routes = [
    { path: '', component: WorldMapComponent},
    { path: '', redirectTo: './worldMap', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}