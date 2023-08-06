import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldMapComponent } from './components/worldMap/worldMap.component';

const routes: Routes = [
    { path: 'worldMapComponent', component: WorldMapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }