import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { BooksService } from '../services/books/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  AllBooks: any;

  constructor(private books: BooksService) { }

  ngOnInit(): void {
    this.AllBooks = this.GetBooks();
  }


  GetBooks(){
    return this.books.getAllBooks().subscribe((data) =>{
      this.AllBooks = data
      console.log(this.AllBooks);
    })
  }




}
