import { EmailService } from "./EmailService.js";

export class PremiumEmailService extends EmailService {
    #premiumEmails = [];
    static PREMIUM_LIMIT = 5;

    addPremiumEmail(email) {
        if (this.#premiumEmails.length >= PremiumEmailService.PREMIUM_LIMIT) {
            this._log(`Error: Premium email limit reached. Cannot add ${email}`);
            throw new Error("Premium email limit reached");
        }
        this.#premiumEmails.push(email);
        this._log(`Premium email added: ${email}`);
    }

    getPremiumEmails() {
        return [...this.#premiumEmails];
    }
}
