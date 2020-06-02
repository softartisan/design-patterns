import Human from "../human/Human";

export default class XRayScanner {
    human: Human;

    scanHuman(human: Human): void
    {
        this.human = human;
    }

    showXRayScan(): void
    {
        console.log('/// X RAY SCAN ///');
        console.log(' '+this.human.head);
        console.log(this.human.leftArm+this.human.body+this.human.rightArm);
        console.log(this.human.leftLeg+' '+this.human.rightLeg);
    }
}