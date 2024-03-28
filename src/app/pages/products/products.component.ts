import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';

import { page } from './products.page'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [
    {
      category: "Virtual World",
      image: "https://blazed.sirv.com/blazed.space/dennys-hess-Gt_4iMB7hY0-unsplash.jpg",
      name: "Blazed World",
      website: "https://blazed.world",
      description: "Discover a whole new world of wonder and amazement."
    },
  ];
  
  constructor(private appService: AppService) {
    appService.setPage(page);
  }

  ngOnInit(): void {
  }

}
