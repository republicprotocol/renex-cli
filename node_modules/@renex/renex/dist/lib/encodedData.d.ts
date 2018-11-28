/**
 * EncodedData is a wrapper type that can contain and format bytes in various
 * encodings (hex, base64, base58, node's buffer).
 *
 * Usage:
 *
 * new EncodedData("0x1234")
 * new EncodedData("1234", Encodings.HEX)
 *
 * new EncodedData(buffer).toBase58()
 *
 */
/// <reference types="node" />
export declare enum Encodings {
    AUTO = "auto",
    HEX = "hex",
    BASE64 = "base64",
    BUFFER = "buffer",
    UNKNOWN = "unknown"
}
declare const DefaultEncodedData: {
    value: string | Buffer;
    encoding: Encodings;
};
declare const EncodedData_base: import("lib/record").RecordInterface<{
    value: string | Buffer;
    encoding: Encodings;
}>;
export declare class EncodedData extends EncodedData_base {
    /**
     * Creates an instance of EncodedData.
     * @param {string | Buffer} param The encoded data
     * @param {Encodings} [encoding] One of "hex", "base64", "buffer"
     * @memberof EncodedData
     */
    constructor(param: EncodedData | string | Buffer | typeof DefaultEncodedData, encoding?: Encodings);
    toHex(this: EncodedData, prefix?: string): string;
    toBase64(this: EncodedData): string;
    toBase58(this: EncodedData): string;
    toBuffer(this: EncodedData): Buffer;
    toString(this: EncodedData): string;
}
export {};
