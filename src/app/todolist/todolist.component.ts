import { Component, OnInit } from '@angular/core';
import {Todo} from '../Models/Todo';
import {CalculService} from '../services/calcul.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  n: number;
  listTodo: Todo[];
  constructor(private calcul: CalculService) { }

  ngOnInit(): void {
    this.listTodo = [
      {id: 1, title: 'task1', completed: true, userId: 1},
      {id: 2, title: 'task2', completed: true, userId: 2}
      ];
    this.n = this.calcul.getStat(this.listTodo, 'completed', true);

  }
  getStat(){

  }

}
