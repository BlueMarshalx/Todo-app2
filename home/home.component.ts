import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../classes/task.model';
import { TaskManageService } from '../services/task-manage.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formGroup = new FormGroup({
    taskName: new FormControl(undefined, [Validators.required]),
    taskDesc: new FormControl(undefined, [Validators.required])
  });

  public taskModel: TaskModel;

  // private _destroy$ = new Subject<void>();

  constructor(private taskManageService: TaskManageService) { }

  ngOnInit() {
  }

  public submitForm() {
    console.log('Form Submitted: ', this.formGroup.value);
    this.taskManageService.createTask(this.formGroup.value.taskName, this.formGroup.value.taskDesc);
    // necessary to return false?
    return false;
  }

}
