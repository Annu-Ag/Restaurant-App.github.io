import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.scss']
})
export class UpdateRestroComponent implements OnInit {

  constructor() { }

  editRestro = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
  });
  ngOnInit(): void {
  }

}
