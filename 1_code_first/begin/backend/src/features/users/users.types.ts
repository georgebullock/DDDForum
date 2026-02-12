export type User = {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type UserWithoutPassword = Omit<User, "password">;
