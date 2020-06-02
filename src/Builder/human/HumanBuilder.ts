import Human from "./Human";

export default class HumanBuilder {
    private static human: Human;

    public static resetHuman() : void
    {
        HumanBuilder.human = new Human();
    }

    public static withHead() : void
    {
        HumanBuilder.human.head = 'O';
    }

    public static withRightArm() : void
    {
        HumanBuilder.human.rightArm = '\\';
    }

    public static withLeftArm() : void
    {
        HumanBuilder.human.leftArm = '/';
    }

    public static withRightLeg() : void
    {
        HumanBuilder.human.rightLeg = '\\';
    }

    public static withLeftLeg() : void
    {
        HumanBuilder.human.leftLeg = '/';
    }

    public static getHuman() : Human
    {
        const human: Human = HumanBuilder.human;
        HumanBuilder.human = new Human();
        return human;
    }
}