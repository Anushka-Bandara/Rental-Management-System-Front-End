import { Routes } from '@angular/router';
import { ItemComponent } from './page/view/item/item.component';
import { RentalComponent } from './page/view/rental/rental.component';

export const routes: Routes = [
    {
        path:"app-item",
        component:ItemComponent
      },
      {
        path:"app-rental",
        component:RentalComponent
      }
];
