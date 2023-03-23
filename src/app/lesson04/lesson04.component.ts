import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson04',
  templateUrl: './lesson04.component.html',
  styleUrls: ['./lesson04.component.scss']
})

export class Lesson04Component {
  public field = '';
  public isOpenModal = false;
  public mFirstName!: string;
  public mLastName!: string;
  public mNum!: string;

  public people: Person[] = [
    {
      firstName: 'Pavlo',
      lastName: 'Zhuk',
      number: '380984557898'
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      number: '380986214567'
    },
    {
      firstName: 'Anastasia',
      lastName: 'Zinchenko',
      number: '380633453445'
    },
    {
      firstName: 'Vasylyna',
      lastName: 'Lana',
      number: '380679345578'
    },
    {
      firstName: 'Iryna',
      lastName: 'Ivanko',
      number: '380667894432'
    },
    {
      firstName: 'Sofia',
      lastName: 'Shevchenko',
      number: '380633453445'
    },
    {
      firstName: 'Yulia',
      lastName: 'Bagrova',
      number: '380633453445'
    },
  ];

  isIconActive = false;

  get iconClass() {
    return this.isIconActive ? 'uil uil-angle-up' : 'uil uil-angle-down';
  }

  public type = 'asc';
  changeSort(): void {
    this.type = this.type === 'asc' ? 'desc' : 'asc';
    this.isIconActive = !this.isIconActive;
  }

  addPhones(): void {
    this.isOpenModal = true
  }

  savePhones() {
    this.isOpenModal = false;
    const person = { firstName: this.mFirstName, lastName: this.mLastName, number: this.mNum};
    this.people.push(person);
    this.mFirstName = '';
    this.mLastName = '';
    this.mNum = '';
  }

  public editStatus = false;
  public editIndex!: number;

  deleteNames(index: number): void {
    this.people.splice(index, 1);
  }

  public isOpenModal2 = false
  editNames(index: number): void {
    this.isOpenModal2 = true;
    this.mFirstName = this.people[index].firstName
    this.mLastName = this.people[index].lastName
    this.mNum = this.people[index].number
    this.editIndex = index;
    this.editStatus = true;
  }

  saveEditPhones() {
    this.isOpenModal2 = false;
    this.people[this.editIndex].firstName = this.mFirstName
    this.people[this.editIndex].lastName = this.mLastName
    this.people[this.editIndex].number = this.mNum
    this.mFirstName = '' 
    this.mLastName = '' 
    this.mNum = '' 
    this.editStatus = false;
  }
}

export interface Person {
  firstName: string;
  lastName: string;
  number: string;
}
