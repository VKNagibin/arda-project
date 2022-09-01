export default class Role {
    #role = 'user';

    setRole(value: 'community member' | 'ARDAMember') {
        this.#role = value;
    }

    getRole() {
        return this.#role;
    }

}