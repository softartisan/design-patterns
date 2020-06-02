import Human from "./human/Human";
import XRayScanner from "./util/XRayScanner";
import HumanDirector from "./human/HumanDirector";

const humanDirector: HumanDirector = new HumanDirector();

const exodia: Human = humanDirector.getWithoutExtremities()

const xRayScanner: XRayScanner = new XRayScanner();

xRayScanner.scanHuman(exodia);

xRayScanner.showXRayScan();