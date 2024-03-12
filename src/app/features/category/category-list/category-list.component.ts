import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories?: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories()
    .subscribe({
      next: (response) =>{
        this.categories = response;
      }
    });
  }
}
