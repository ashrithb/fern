/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { EndpointSdkName } from "../../finalIr/types/EndpointSdkName";
import { WebhookHttpMethod } from "../../finalIr/types/WebhookHttpMethod";
import { TagId } from "../../commons/types/TagId";
import { HeaderWithExample } from "./HeaderWithExample";
import { WebhookExampleCall } from "../../finalIr/types/WebhookExampleCall";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithSource } from "../../commons/types/WithSource";
import { WithNamespace } from "../../commons/types/WithNamespace";

export const WebhookWithExample: core.serialization.ObjectSchema<
    serializers.WebhookWithExample.Raw,
    FernOpenapiIr.WebhookWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        audiences: core.serialization.list(core.serialization.string()),
        sdkName: EndpointSdkName.optional(),
        method: WebhookHttpMethod,
        summary: core.serialization.string().optional(),
        operationId: core.serialization.string(),
        tags: core.serialization.list(TagId),
        headers: core.serialization.list(HeaderWithExample),
        generatedPayloadName: core.serialization.string(),
        payload: core.serialization.lazy(() => serializers.SchemaWithExample),
        examples: core.serialization.list(WebhookExampleCall),
    })
    .extend(WithDescription)
    .extend(WithSource)
    .extend(WithNamespace);

export declare namespace WebhookWithExample {
    export interface Raw extends WithDescription.Raw, WithSource.Raw, WithNamespace.Raw {
        audiences: string[];
        sdkName?: EndpointSdkName.Raw | null;
        method: WebhookHttpMethod.Raw;
        summary?: string | null;
        operationId: string;
        tags: TagId.Raw[];
        headers: HeaderWithExample.Raw[];
        generatedPayloadName: string;
        payload: serializers.SchemaWithExample.Raw;
        examples: WebhookExampleCall.Raw[];
    }
}
