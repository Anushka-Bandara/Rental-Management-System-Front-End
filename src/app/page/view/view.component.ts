import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { RentalComponent } from './rental/rental.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [ItemComponent,FormsModule,RentalComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

}
