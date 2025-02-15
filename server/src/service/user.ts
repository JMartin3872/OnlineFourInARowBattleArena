import { User } from "../model/user";


export class UserService{
    users : User[] = []


    async createUser(uname : string, pword : string) : Promise<boolean> {
        
        if(!this.checkUserExists(uname)){
            return false;
        }
        
        let newUser : User = {
            username : uname,
            password : pword
        }

        this.users.push(newUser);
        return true;
    }

    async checkUserExists(uname : string) : Promise<boolean>{
        return false;
    }

    async findUser(username : string, password : string) : Promise<User | undefined>{
    
        return this.users.find((user) => user.username === username && user.password === password);
    }

}