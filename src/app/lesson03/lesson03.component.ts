import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { ChildComponent } from './child/child.component';


export interface Task {
  name: string;
  status: string;
  done: string;
}
@Component({
  selector: 'app-lesson03',
  templateUrl: './lesson03.component.html',
  styleUrls: ['./lesson03.component.scss']
})
export class Lesson03Component {

  public userName: string;
  public taskList: { name: string, status: boolean, done: string }[];
  public count = 6;

  constructor() {
    this.userName = ''
    this.taskList = [
      { name: 'HTML5', status: false, done: 'In PROGRESS' },
      { name: 'CSS3', status: false, done: 'In PROGRESS' },
      { name: 'SCSS', status: false, done: 'In PROGRESS' },
      { name: 'Javascript', status: false, done: 'In PROGRESS' },
      { name: 'jQuery', status: false, done: 'In PROGRESS' },
      { name: 'Angular', status: false, done: 'In PROGRESS' }
    ];
  }

  addTasks(): void {
    const task = { name: this.userName, status: false, done: 'In PROGRESS'};
    this.taskList.push(task);
    this.userName = '';
    this.count++
  }

}
