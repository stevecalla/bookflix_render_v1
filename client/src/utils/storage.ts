// Typescript Interface for User data
interface User {
    userId: string;
    email: string;
    password: string;
  }
  
  // Save new user in localStorage
  export const registerUser = (user: User) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  // Find a user by userId
  export const findUserById = (userId: string): User | null => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find((user: User) => user.userId === userId) || null;
  };
  
  // Validate user credentials
  export const validateUser = (userId: string, password: string): boolean => {
    const user = findUserById(userId);
    return user !== null && user.password === password;
  };
  
  
  // Find a user by userId or email
    export const findUserByEmail = (Email: string): User | null => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        return users.find(
        (user: User) => user.email === Email
        ) || null;
    };
// Update user password
export const updateUserPassword = (userId: string, newPassword: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map((user: User) => {
      if (user.userId === userId) {
        return { ...user, password: newPassword };
      }
      return user;
    });
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };
  // Export the User interface
  export type { User };