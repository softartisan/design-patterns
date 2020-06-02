import { GenericClassDecorator, Type } from "./utils";

/**
 * Generic decorator to emit metadata
 * @returns {GenericClassDecorator<Type<any>>}
 * @constructor
 */
export const Service = () : GenericClassDecorator<Type<any>> => {
    return (target: Type<any>) => {
        //console.log(Reflect.getMetadata('design:paramtypes', target));
    };
};