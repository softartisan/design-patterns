import Human from "./Human";
import HumanBuilder from "./HumanBuilder";

export default class HumanDirector {
    getFull(): Human {
        HumanBuilder.resetHuman();
        HumanBuilder.withHead();
        HumanBuilder.withLeftArm();
        HumanBuilder.withRightArm();
        HumanBuilder.withLeftLeg();
        HumanBuilder.withRightLeg();
        return HumanBuilder.getHuman();
    }

    getWithoutExtremities(): Human {
        HumanBuilder.resetHuman();
        HumanBuilder.withHead();
        return HumanBuilder.getHuman();
    }
}