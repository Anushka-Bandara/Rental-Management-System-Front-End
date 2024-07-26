import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  constructor(private http: HttpClient) { }

  addItem() {
    console.log(this.item)
    this.item.isAvailable = true;
    this.http.post("http://localhost:8080/item/add", this.item).subscribe(
      (data) => {
        Swal.fire({
          title: "Text added!",
          text: "You clicked the button!",
          icon: "success"
        });
      }
    )
  }
  public item = {
    id: "",
    name: "",
    isAvailable: false,
    rentPerDay: "",
    finePerDay: ""
  }
}
