import companies from "@/configs/companies";
import PreparedCompanies from "@/services/PreparedCompanies";

export default function getSortedCompanies() {
    const preparedCompanies = new PreparedCompanies(companies);
    return preparedCompanies.getPreparedCompanies();
}

export function getOutstaffingAndOutsourcing() {
    const preparedCompanies = new PreparedCompanies(companies);
    return preparedCompanies.getOutstaffingAndOutsourcing();
}

export function getOutsourcing() {
    const preparedCompanies = new PreparedCompanies(companies);
    return preparedCompanies.getOutsourcing();
}

export function getOutstaffing() {
    const preparedCompanies = new PreparedCompanies(companies);
    return preparedCompanies.getOutstaffing();
}