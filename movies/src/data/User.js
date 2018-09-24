class User {

    constructor(firstName, lastName, username) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.numOfGamesPlayed = 0;
    }

    updateNumOfGamesPlayed(numOfGamesPlayed) {
        this.numOfGamesPlayed = numOfGamesPlayed;
    }
}

export default User;