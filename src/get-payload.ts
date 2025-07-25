import dotenv from "dotenv";
import path from "path";
import type { InitOptions } from "payload/config";

interface Args {
    initOptions?: Partial<InitOptions>;
}

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

let cached = (global as any).payload;

if (!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null,
    };
}

export const getPayloadClient = async ({ initOptions }: Args = {}) => {
    if (!process.env.PAYLOAD_SECRET) {
        throw new Error("Payload Secret is missing.");
    }
};
