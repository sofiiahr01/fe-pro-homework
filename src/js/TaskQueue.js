
import { delay } from "./delay.js";

export class TaskQueue {
    constructor(delayMs) {
        this.delayMs = delayMs;
        this.tasks = [];
        this.isRunning = false;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    run() {
        if (this.isRunning) {
            return Promise.reject(new Error("Черга вже виконується"));
        }

        this.isRunning = true;

        const executeTasks = () => {
            let promise = Promise.resolve();

            this.tasks.forEach((task, index) => {
                promise = promise
                    .then(() => task())
                    .then((result) => {
                        console.log(result);
                        if (index < this.tasks.length - 1) {
                            return delay(this.delayMs);
                        }
                    })
                    .catch((error) => {
                        console.error(`Помилка у завданні: ${error.message}`);
                    });
            });

            return promise;
        };

        return executeTasks()
            .then(() => {
                this.isRunning = false;
                return "Усі завдання завершено";
            })
            .catch((error) => {
                this.isRunning = false;
                throw error;
            });
    }
}
