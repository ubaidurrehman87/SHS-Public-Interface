import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  AddtoCart(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to Buy!",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Add it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Added!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
