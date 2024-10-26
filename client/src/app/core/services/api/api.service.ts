import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IElement } from '../../../interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Data that should be fetched from the server
  private elements:IElement[]= [
    {
      id: 1,
      name: 'جميع الوزارات',
      description: 'تفاصيل معينة'
    },
    {
      id: 2,
      name: 'جميع الهيئات',
      description: 'تفاصيل معينة'
    },
    {
      id: 3,
      name: 'جميع الجامعات',
      description: 'تفاصيل معينة'
    },
    {
      id: 4,
      name: 'جميع الشركات',
      description: 'تفاصيل معينة'
    }
  ]

   // Methods that should be implemented in the real API service
   //Get all elements
  getElements():Observable<IElement[]> {
    return of(this.elements);
  }

  //Search for elements
  searchAction(searchTerm: string):Observable<IElement[]> {
    const results = this.elements.filter(element => element.name.includes(searchTerm));
    return of(results);
  }

  //Get a single
  getElement(id: number):Observable<any> {
    return of(this.elements.find(element => element.id === id));
  }

  //Add a new element
  addElement(element: IElement):Observable<IElement> {
    this.elements.push(element);
    return of(element);
  }

  //Update an element
  updateElement(element: IElement):Observable<IElement> {
    const index = this.elements.findIndex(e => e.id === element.id);
    this.elements[index] = element;
    return of(element);
  }

  //Delete an element
  deleteElement(id: number):Observable<any> {
    this.elements = this.elements.filter(element => element.id !== id);
    return of(null);
  }

}
