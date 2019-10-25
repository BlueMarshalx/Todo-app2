export class TaskModel {
    public taskId: number;
    public taskName: string;
    public taskDesc: string;
    public taskDate: Date | undefined;
    public taskStatus: boolean;

    constructor(taskId: number, taskName: string, taskDesc: string, taskDate?: Date, taskStatus?: boolean) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.taskDesc = taskDesc;
        this.taskDate = taskDate;
        this.taskStatus = taskStatus;
    }
}
