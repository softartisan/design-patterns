import Human from "./human/Human";
import XRayScanner from "./util/XRayScanner";

const exodia: Human = new Human()
    .withHead()
    .withRightArm()
    .withLeftArm()
    .withRightLeg()
    .withLeftLeg();

const xRayScanner: XRayScanner = new XRayScanner();

xRayScanner.scanHuman(exodia);

xRayScanner.showXRayScan();