export class Member {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  numTel!: string;
  imageUrl!: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    numTel: string,
    imageUrl: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.numTel = numTel;
    this.imageUrl = imageUrl;
  }
}
