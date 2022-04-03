import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RandomData } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class RandomDataService {
  data = [
    {
      id: '1',
      'animal': 'Grey fox',
      'color': 'Red',
      'car': 'S-Type',
      'city': 'Shuozhou'
    }, {
      id: '2',
      'animal': 'Rhinoceros, black',
      'color': 'Green',
      'car': 'Navajo',
      'city': 'Banjar Jambe Baleran'
    }, {
      id: '3',
      'animal': 'Snowy sheathbill',
      'color': 'Fuscia',
      'car': 'Sonata',
      'city': 'Whakatane'
    }, {
      id: '4',
      'animal': 'Levaillant\'s barbet',
      'color': 'Maroon',
      'car': 'MX-3',
      'city': 'Swellendam'
    }, {
      id: '5',
      'animal': 'Bustard, kori',
      'color': 'Yellow',
      'car': 'Pilot',
      'city': 'Bačka Topola'
    }, {
      id: '6',
      'animal': 'Oribi',
      'color': 'Crimson',
      'car': 'Freelander',
      'city': 'Hualin'
    }, {
      id: '7',
      'animal': 'Woodrat (unidentified)',
      'color': 'Maroon',
      'car': 'Grand Prix',
      'city': 'Sidoger Lebak'
    }, {
      id: '8',
      'animal': 'Magpie, australian',
      'color': 'Khaki',
      'car': 'Civic',
      'city': 'Fenais da Luz'
    }, {
      id: '9',
      'animal': 'Great white pelican',
      'color': 'Teal',
      'car': 'VS Commodore',
      'city': 'Várzea da Palma'
    }, {
      id: '10',
      'animal': 'Egret, cattle',
      'color': 'Violet',
      'car': 'Continental Super',
      'city': 'Kupiskis'
    }
  ];

  constructor () {
  }

  getDefaultRandomData (): Observable<RandomData> {
    return of(this.data[0]);
  }

  getRandomData (): Observable<RandomData[]> {
    return of(this.data);
  }

  getRandomDataById (id: string): Observable<RandomData> {
    const selectedItem = this.data.find(dataItem => dataItem.id === id);

    return of(selectedItem ? selectedItem : this.data[0]);
  }
}
