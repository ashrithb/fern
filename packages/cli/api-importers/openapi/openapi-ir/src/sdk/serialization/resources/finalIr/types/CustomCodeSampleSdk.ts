/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { SupportedSdkLanguage } from "./SupportedSdkLanguage";
import { WithDescription } from "../../commons/types/WithDescription";

export const CustomCodeSampleSdk: core.serialization.ObjectSchema<
    serializers.CustomCodeSampleSdk.Raw,
    FernOpenapiIr.CustomCodeSampleSdk
> = core.serialization
    .objectWithoutOptionalProperties({
        name: core.serialization.string().optional(),
        sdk: SupportedSdkLanguage,
        code: core.serialization.string(),
    })
    .extend(WithDescription);

export declare namespace CustomCodeSampleSdk {
    export interface Raw extends WithDescription.Raw {
        name?: string | null;
        sdk: SupportedSdkLanguage.Raw;
        code: string;
    }
}
