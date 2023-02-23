class User extends Account {
    constructor(id, email, password) {
        super(id, email, password)
        this.id = id
        this.email = email
        this.password = password
    }
}