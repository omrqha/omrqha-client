export interface Task {
  categoryName: string;
  order: number;
  tasks: [{
    taskName: string,
    selected: boolean,
    order: number
  }],

}
