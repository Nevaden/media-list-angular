import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  firebaseURL= 'https://media-list-ee25d-default-rtdb.firebaseio.com/'
  jsonEXT = '.json'
  searchResults = 0;

  url = `${this.firebaseURL}${this.jsonEXT}`
  
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any>{
    return this.http.get(this.url)
  
  }

}


// getData(): Observable<any>{

// }


