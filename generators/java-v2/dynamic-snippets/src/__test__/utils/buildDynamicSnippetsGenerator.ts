import { readFileSync } from "fs";

import { FernGeneratorExec, Style } from "@fern-api/browser-compatible-base-generator";
import { AbsoluteFilePath } from "@fern-api/path-utils";

import { DynamicSnippetsGenerator } from "../../DynamicSnippetsGenerator";

export function buildDynamicSnippetsGenerator({
    irFilepath,
    config
}: {
    irFilepath: AbsoluteFilePath;
    config: FernGeneratorExec.GeneratorConfig;
}): DynamicSnippetsGenerator {
    const content = readFileSync(irFilepath, "utf-8");
    const ir = JSON.parse(content);
    return new DynamicSnippetsGenerator({ ir, config, options: { style: Style.Concise } });
}
