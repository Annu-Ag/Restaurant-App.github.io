import { Component, OnInit } from '@angular/core';

import { RestroService } from './../../service/restro.service';

@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.scss'],
})
export class ListRestroComponent implements OnInit {
  list: any = [];
  constructor(private restro: RestroService) {}

  ngOnInit(): void {
    this.restro.getList().subscribe((result) => {
      if (result) {
        this.list = result;
        console.log(this.list);
      }
    });
  }
  deleteRestro(item: any) {
    console.log(this.list);
   
    this.restro.deleteRestro(item).subscribe((result) => {
      console.log(result);
    });
    this.list.splice(item - 1, 1);
  }
}
