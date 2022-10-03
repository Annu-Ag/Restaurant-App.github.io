import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {RestroService} from '../../service/restro.service';

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.scss'],
})
export class AddRestroComponent implements OnInit {
  constructor(private restro:RestroService) {}

  alert:boolean=false;

  addRestro = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
  });
  collectRestro(){
    //console.log(this.addRestro.value);
    this.restro.saveRestro(this.addRestro.value).subscribe((result)=>{
    console.warn(result);
    this.alert=true;
    })
    this.addRestro.reset({})
  }
  closeAlert(){
    this.alert=false;
  }
  ngOnInit(): void {}
}
