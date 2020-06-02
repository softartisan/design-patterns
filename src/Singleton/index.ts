import UserStore from "./UserStore";

const userStore = UserStore.getInstance();

userStore.setUsername('scanio@option.cl');

console.log(UserStore.getInstance().getUsername());

