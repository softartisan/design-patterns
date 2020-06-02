export default class UserStore {
    private static instance: UserStore;
    private username: string;
    private role: string;

    private constructor() {
        this.username = '';
        this.role = '';
    }

    public setRole(role: string) : UserStore
    {
        this.role = role;
        return this;
    }

    public setUsername(username: string) : UserStore
    {
        this.username = username;
        return this;
    }

    public getRole() : string
    {
        return this.role;
    }

    public getUsername(): string
    {
        return this.username;
    }

    public static getInstance(): UserStore {
        if (!UserStore.instance) {
            UserStore.instance = new UserStore();
        }

        return UserStore.instance;
    }
}