export class User
{
    constructor(name, email, profilePicture, bio)
    {
        this.name = name;
        this.email = email;
        this.profilePicture = profilePicture;
        this.bio = bio;
    }
}

User.current = null;