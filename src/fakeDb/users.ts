interface IUser {
  name: string,
  age: number,
  email: string,
  passwordHash: string,  // obviously don't really want to get this back
  location?: string
}

class User implements IUser {
  constructor(
    public name: string,
    public age: number,
    public email: string,
    public passwordHash: string,
    public location?: string) {}
}

export const FakeDB = [
  new User("Gary", 24, "gary@g.com", "ffaefsds"),
  new User("Dave", 46, "dave@d.com", "faefasdads", "Wellington"),
  new User("Sarah", 22, "sarah@s.com", "fsadsads", "Christchurch"),
  new User("Aliah", 34, "gary@g.com", "faefsdds", "Dunedin"),
  new User("Jean", 12, "jean@j.com", "aefwwefs", "Auckland"),
]

export default User;