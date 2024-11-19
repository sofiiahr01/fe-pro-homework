import { PremiumEmailService } from "./PremiumEmailService.js";
import { EnterpriseEmailService } from "./EnterpriseEmailService.js";

// Приклад використання
const premiumService1 = new PremiumEmailService();
const premiumService2 = new PremiumEmailService();
const enterpriseService = new EnterpriseEmailService();

premiumService1.addPremiumEmail("vip1@premium.com");
premiumService1.addPremiumEmail("vip2@premium.com");

console.log("Premium Emails in Service 1:", premiumService1.getPremiumEmails());

enterpriseService.addPremiumEmail("enterprise@premium.com");

enterpriseService.migratePremiumEmails(premiumService2);

console.log("Premium Emails in Service 2 after migration:", premiumService2.getPremiumEmails());

console.log("Logs from Premium Service 1:");
console.log(premiumService1.getLogs());
