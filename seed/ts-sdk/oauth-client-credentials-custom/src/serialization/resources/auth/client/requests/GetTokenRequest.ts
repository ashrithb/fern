/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as SeedOauthClientCredentials from "../../../../../api/index";
import * as core from "../../../../../core";

export const GetTokenRequest: core.serialization.Schema<
    serializers.GetTokenRequest.Raw,
    SeedOauthClientCredentials.GetTokenRequest
> = core.serialization.object({
    cid: core.serialization.string(),
    csr: core.serialization.string(),
    scp: core.serialization.string(),
    entityId: core.serialization.property("entity_id", core.serialization.string()),
    scope: core.serialization.string().optional(),
});

export declare namespace GetTokenRequest {
    export interface Raw {
        cid: string;
        csr: string;
        scp: string;
        entity_id: string;
        scope?: string | null;
    }
}
