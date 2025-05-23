/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDocsConfig from "../../../../api/index";
import * as core from "../../../../core";
import { TabId } from "./TabId";
import { TabConfig } from "./TabConfig";
import { PageConfiguration } from "./PageConfiguration";
import { NavigationConfig } from "./NavigationConfig";

export const VersionFileConfig: core.serialization.ObjectSchema<
    serializers.VersionFileConfig.Raw,
    FernDocsConfig.VersionFileConfig
> = core.serialization.object({
    tabs: core.serialization.record(TabId, TabConfig).optional(),
    landingPage: core.serialization.property("landing-page", PageConfiguration.optional()),
    navigation: NavigationConfig,
});

export declare namespace VersionFileConfig {
    export interface Raw {
        tabs?: Record<TabId.Raw, TabConfig.Raw> | null;
        "landing-page"?: PageConfiguration.Raw | null;
        navigation: NavigationConfig.Raw;
    }
}
