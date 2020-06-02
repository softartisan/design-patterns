import {Service} from "../application/ServiceDecorator";
import {UserService} from "./UserService";

@Service()
export class AuthenticationService {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    createUserAndLogIn() {
        this.userService.createUser();
        console.log('return sesion token');
    }
}
