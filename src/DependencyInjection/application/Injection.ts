import 'reflect-metadata';
import { Type } from "./utils";

export class Injector {

    public static resolve<T>(target: Type<any>): T {
        /** Tokens of the constructor */
        // @ts-ignore
        let tokens = Reflect.getMetadata('design:paramtypes', target) || [];

        /** Dependencies resolved to fill the constructor */
        let injections = tokens.map(token => Injector.resolve<any>(token));
        return new target(...injections);
    }
}