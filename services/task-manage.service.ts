import { Injectable, OnDestroy } from '@angular/core';
import { TaskModel } from '../classes/task.model';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskManageService {

  public taskId = 1;

  private _destroy$ = new Subject<void>();

  constructor() { }

  public createTask(taskName: string, taskDesc: string): void {
    console.log(`Creating Task: ${this.taskId} - ${taskName}: ${taskDesc}`);
    const task = new TaskModel(this.taskId, taskName, taskDesc);
    localStorage.setItem(this.taskId.toString(), JSON.stringify(task));
    this.taskId++;
    console.log('Next task ID is: ' + this.taskId);
  }

  public loadTask(taskId: number): Observable<TaskModel | undefined> {
    const taskString = localStorage.getItem(taskId.toString());
    if (!taskString) {
      return of(undefined);
    }
    const task = JSON.parse(taskString) as TaskModel;
    return of(task);
  }

  public updateTask(taskModel: TaskModel): void {
    localStorage.setItem(taskModel.taskId.toString(), JSON.stringify(taskModel));
  }

  public deleteTask() {
  }

  // public loadTask(): Observable<TaskModel> {
  //   const taskString = localStorage.getItem(this.taskId.toString());
  //   const task = JSON.parse(taskString) as TaskModel;
  //   return of(task);
  // }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  // public loadTask2(): void {
  //   this.taskId.loadPerson().pipe.(takeUntil(this._destroy$)).subscribe((this.taskId: TaskModel) => {
  //     this.taskId = this.taskId;
  // },
  // (error: any) => {
  //   console.log('An error occured when loading task', error);
  // },
  // () => {
  //   console.log('Task loaded successfully');
  // });

}
