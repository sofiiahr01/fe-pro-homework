import { EmailService } from "./EmailService.js";
import { PremiumEmailService } from "./PremiumEmailService.js";

export class EnterpriseEmailService extends EmailService {
    #premiumEmails = [];

    addPremiumEmail(email) {
        this.#premiumEmails.push(email);
        this._log(`Enterprise premium email added: ${email}`);
    }

    migratePremiumEmails(targetService) {
        if (!(targetService instanceof PremiumEmailService)) {
            this._log("Error: Target service is not an instance of PremiumEmailService");
            throw new Error("Target service must be an instance of PremiumEmailService");
        }

        while (this.#premiumEmails.length > 0) {
            const email = this.#premiumEmails.shift();
            try {
                targetService.addPremiumEmail(email);
                this._log(`Migrated email: ${email} to target service`);
            } catch (error) {
                this._log(`Failed to migrate email: ${email} - ${error.message}`);
                this.#premiumEmails.unshift(email);
                break;
            }
        }
    }
}
