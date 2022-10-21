import { Injectable } from '@angular/core';
import { People } from '../models/people.model';
@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  person: People[] = [
    {
      id: 0,
      name: 'Diego',
      surname: 'Aguilera',
      picture: '',
      phone: '61199996',
    },
    {
      id: 1,
      name: 'ALvaro',
      surname: 'Linero',
      sex: 'Male',
      picture: 'https://st4.depositphotos.com/2435397/23873/i/600/depositphotos_238732548-stock-photo-cartoon-scene-with-hippo-on.jpg',
    },
    {
      id: 2,
      name: 'Sergio',
      surname: 'Dominguez',
      sex: 'Male',
      picture: '',
    },
    {
      id: 3,
      name: 'Diego',
      surname: 'Rodriguez',
      picture: 'https://cdn-icons-png.flaticon.com/512/804/804368.png',
      phone: '794572867',
    },
  ];
  id: number = this.person.length + 1;

  constructor() {}

  public getPerson(): People[] {
    // return person
    return this.person;
  }

  public getPersonsById(id: number) {
    // returns person by ID
    return this.person.find((ppl) => ppl.id == id);
  }

  deletePersonById(id: number) {
    // delete person by ID
    this.person = this.person.filter((ppl) => ppl.id != id);
  }

  addPerson(ppl: People) {
    ppl.id = this.id++;
    this.person.push(ppl);
  }

  updatePerson(ppl: People) {
    var peopl = this.person.find(p=>p.id==ppl.id);
    if (peopl) {
      peopl.name = ppl.name;
      peopl.surname = ppl.surname;
      peopl.sex = ppl.sex;
      peopl.phone = ppl.phone;
      peopl.picture = ppl.picture;
    }
  }
}
