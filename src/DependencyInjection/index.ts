import { Injector } from "./application/Injection";
import { AuthenticationService } from "./services/AuthenticationService";

const authenticationService: AuthenticationService = Injector
    .resolve<AuthenticationService>(AuthenticationService);

authenticationService.createUserAndLogIn();