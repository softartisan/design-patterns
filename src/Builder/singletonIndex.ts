import Human from "./human/Human";
import XRayScanner from "./util/XRayScanner";
import HumanBuilder from "./human/HumanBuilder";

HumanBuilder.resetHuman();
HumanBuilder.withHead();
HumanBuilder.withLeftArm();
HumanBuilder.withRightArm();
HumanBuilder.withLeftLeg();
HumanBuilder.withRightLeg();
const exodia: Human = HumanBuilder.getHuman();

const xRayScanner: XRayScanner = new XRayScanner();

xRayScanner.scanHuman(exodia);

xRayScanner.showXRayScan();