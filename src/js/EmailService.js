export class EmailService {
    static #instance = null;
    #logs = [];
    #emails = [];

    constructor() {
        if (EmailService.#instance) {
            return EmailService.#instance;
        }
        EmailService.#instance = this;
    }

    addEmail(email) {
        this.#emails.push(email);
        this._log(`Email added: ${email}`);
    }

    getEmails() {
        return [...this.#emails];
    }

    _log(message) {
        const logEntry = `[${new Date().toISOString()}] ${message}`;
        this.#logs.push(logEntry);
        console.log(logEntry);
    }

    getLogs() {
        return [...this.#logs];
    }
}
