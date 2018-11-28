/**
 * Create a new class that can be instantiated. All instances of the class
 * will be immutable, and will be guaranteed to have all properties of the
 * interface T. Default values for these properties can be specified. Using
 * the getter and setter methods are type safe.
 *
 * @param data An object defining the default value for instances of the
 *             class that will be returned.
 *
 * @return A class that can be used to instantiate immutable objects.
 */
export declare function Record<T>(data: Pick<T, keyof T>): RecordInterface<T>;
export interface RecordInterface<T> {
    new (inner?: Partial<T>): Props<T> & Methods<T>;
}
declare type Props<T> = {
    readonly [P in keyof T]: T[P];
};
interface Methods<T> {
    get<K extends keyof T, V extends T[K]>(key: K): V;
    set<K extends keyof T, V extends T[K]>(key: K, value: V): this;
    merge<K extends keyof T, V extends T[K]>(inner: Partial<T> | {
        [key in K]: V;
    }): this;
    toJS(): any;
}
export {};
