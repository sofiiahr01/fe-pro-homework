
import { TaskQueue } from "./TaskQueue.js";

const queue = new TaskQueue(1000);

queue.addTask(() => Promise.resolve("Task 1 виконано"));
queue.addTask(() => Promise.resolve("Task 2 виконано"));
queue.addTask(() => Promise.resolve("Task 3 виконано"));

queue
    .run()
    .then((message) => console.log(message))
    .catch((error) => console.error(error.message));
