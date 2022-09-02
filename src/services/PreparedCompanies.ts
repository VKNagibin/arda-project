import Company from "@/interfaces/Company";

interface CompaniesCollection {
    unmarkedCompanies: Company[],
    markedARDAMembers: Company[],
    markedBrokers: Company[],
}

export default class PreparedCompanies {
    #companies: Company[];

    constructor(companies: Company[]) {
        this.#companies = companies;
    }

    getPreparedCompanies() {
        const unmarkedCompanies = this.#getUnmarkedCompanies();
        const ardaMembers = this.#getARDAMembers();
        const brokers = this.#getBrokers();
        const markedARDAMembers = this.#setARDAMembersMark(ardaMembers);
        const markedBrokers = this.#setBrokersMark(brokers);

        return this.#sortCompaniesArray(
            {
                unmarkedCompanies,
                markedARDAMembers,
                markedBrokers
            }
        );
    }

    getOutstaffingAndOutsourcing() {
        const preparedCompanies = this.getPreparedCompanies();
        return preparedCompanies.filter((item: Company) => item.cooperationFormat.length === 2);
    }

    getOutsourcing() {
        const preparedCompanies = this.getPreparedCompanies();
        return preparedCompanies.filter((item: Company) => (
            item.cooperationFormat.length === 1 && item.cooperationFormat[0] === 'Аутсорсинг' )
        )
    }

    getOutstaffing() {
        const preparedCompanies = this.getPreparedCompanies();
        return preparedCompanies.filter((item: Company) => (
            item.cooperationFormat.length === 1 && item.cooperationFormat[0] === 'Аутстаффинг' )
        )
    }

    #sortCompaniesArray({ unmarkedCompanies, markedARDAMembers, markedBrokers }: CompaniesCollection ) {
        return [
            ...markedARDAMembers,
            ...markedBrokers,
            ...unmarkedCompanies,
        ]
    }

    #getUnmarkedCompanies() {
        return this.#companies.filter((item: Company) => !item.isMember && !item.isBroker);
    }

    #getARDAMembers() {
        return this.#companies.filter((item: Company) => item.isMember);
    }

    #setARDAMembersMark(members: Company[]) {
        return members.map((item: Company) => ({ ...item, markType: "member"}) );
    }

    #getBrokers() {
        return this.#companies.filter((item: Company) => item.isBroker);
    }

    #setBrokersMark(brokers: Company[]) {
        return brokers.map((item: Company) => ({ ...item, markType: "broker"}) );
    }
}
