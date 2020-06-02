import { Service } from "../application/ServiceDecorator";

@Service()
export class UserService {
    createUser() {
        console.log('Create user');
    }
}