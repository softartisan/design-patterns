export default class Human {
    body: string;
    head: string;
    rightArm: string;
    leftArm: string;
    rightLeg: string;
    leftLeg: string;

    constructor() {
        this.head = ' ';
        this.rightLeg = ' ';
        this.leftArm = ' ';
        this.rightArm = ' ';
        this.leftLeg = ' ';
        this.body = '|';
    }

    public withHead() : Human
    {
        this.head = 'O';
        return this;
    }

    public withRightArm() : Human
    {
        this.rightArm = '\\';
        return this;
    }

    public withLeftArm() : Human
    {
        this.leftArm = '/';
        return this;
    }

    public withRightLeg() : Human
    {
        this.rightLeg = '\\';
        return this;
    }

    public withLeftLeg() : Human
    {
        this.leftLeg = '/';
        return this;
    }
}
