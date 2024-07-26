import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent {

  constructor(private http: HttpClient) { }

  addRental() {
    console.log(this.rental)
    this.http.post("http://localhost:8080/rental/add", this.rental).subscribe(
      (data) => {
        Swal.fire({
          title: "Text added!",
          text: "You clicked the button!",
          icon: "success"
        });
      }
    )
  }
  public rental = {
    id: "",
    rentDate: "",
    returnDate: "",
    dueDate: "",
    fine: "",
    total:""
  }

}
