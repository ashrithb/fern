/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const CreateProblemRequest: core.serialization.ObjectSchema<
    serializers.CreateProblemRequest.Raw,
    SeedTrace.CreateProblemRequest
> = core.serialization.object({
    problemName: core.serialization.string(),
    problemDescription: core.serialization.lazyObject(() => serializers.ProblemDescription),
    files: core.serialization.record(
        core.serialization.lazy(() => serializers.Language),
        core.serialization.lazyObject(() => serializers.ProblemFiles).optional(),
    ),
    inputParams: core.serialization.list(core.serialization.lazyObject(() => serializers.VariableTypeAndName)),
    outputType: core.serialization.lazy(() => serializers.VariableType),
    testcases: core.serialization.list(core.serialization.lazyObject(() => serializers.TestCaseWithExpectedResult)),
    methodName: core.serialization.string(),
});

export declare namespace CreateProblemRequest {
    export interface Raw {
        problemName: string;
        problemDescription: serializers.ProblemDescription.Raw;
        files: Record<serializers.Language.Raw, serializers.ProblemFiles.Raw | null | undefined>;
        inputParams: serializers.VariableTypeAndName.Raw[];
        outputType: serializers.VariableType.Raw;
        testcases: serializers.TestCaseWithExpectedResult.Raw[];
        methodName: string;
    }
}
