import { Injectable } from "@angular/core";
import { User } from '../interfaces';
import { Observable, of } from 'rxjs';

@Injectable()
export class UsersService {
  private users = [
    {
    "id": 1,
    "first_name": "Shirlee",
    "last_name": "Golland",
    "email": "sgolland0@washington.edu",
    "gender": "Agender"
  }, {
    "id": 2,
    "first_name": "Wilie",
    "last_name": "Revill",
    "email": "wrevill1@wisc.edu",
    "gender": "Female"
  }, {
    "id": 3,
    "first_name": "Ivar",
    "last_name": "Banthorpe",
    "email": "ibanthorpe2@netvibes.com",
    "gender": "Male"
  }, {
    "id": 4,
    "first_name": "Adrien",
    "last_name": "Uppett",
    "email": "auppett3@nsw.gov.au",
    "gender": "Genderfluid"
  }, {
    "id": 5,
    "first_name": "Oswell",
    "last_name": "Steketee",
    "email": "osteketee4@prnewswire.com",
    "gender": "Male"
  }, {
    "id": 6,
    "first_name": "Linzy",
    "last_name": "Heigho",
    "email": "lheigho5@nytimes.com",
    "gender": "Female"
  }, {
    "id": 7,
    "first_name": "Elisabet",
    "last_name": "Jenson",
    "email": "ejenson6@cnet.com",
    "gender": "Female"
  }, {
    "id": 8,
    "first_name": "Cassie",
    "last_name": "Lodford",
    "email": "clodford7@etsy.com",
    "gender": "Female"
  }];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
}
