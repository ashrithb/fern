/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../index";

export type WorkspaceSubmissionUpdateInfo =
    | SeedTrace.WorkspaceSubmissionUpdateInfo.Running
    | SeedTrace.WorkspaceSubmissionUpdateInfo.Ran
    | SeedTrace.WorkspaceSubmissionUpdateInfo.Stopped
    | SeedTrace.WorkspaceSubmissionUpdateInfo.Traced
    | SeedTrace.WorkspaceSubmissionUpdateInfo.TracedV2
    | SeedTrace.WorkspaceSubmissionUpdateInfo.Errored
    | SeedTrace.WorkspaceSubmissionUpdateInfo.Finished
    | SeedTrace.WorkspaceSubmissionUpdateInfo._Unknown;

export namespace WorkspaceSubmissionUpdateInfo {
    export interface Running extends _Utils {
        type: "running";
        value: SeedTrace.RunningSubmissionState;
    }

    export interface Ran extends SeedTrace.WorkspaceRunDetails, _Utils {
        type: "ran";
    }

    export interface Stopped extends _Utils {
        type: "stopped";
    }

    export interface Traced extends _Utils {
        type: "traced";
    }

    export interface TracedV2 extends SeedTrace.WorkspaceTracedUpdate, _Utils {
        type: "tracedV2";
    }

    export interface Errored extends _Utils {
        type: "errored";
        value: SeedTrace.ErrorInfo;
    }

    export interface Finished extends _Utils {
        type: "finished";
    }

    export interface _Unknown extends _Utils {
        type: void;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: SeedTrace.WorkspaceSubmissionUpdateInfo._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        running: (value: SeedTrace.RunningSubmissionState) => _Result;
        ran: (value: SeedTrace.WorkspaceRunDetails) => _Result;
        stopped: () => _Result;
        traced: () => _Result;
        tracedV2: (value: SeedTrace.WorkspaceTracedUpdate) => _Result;
        errored: (value: SeedTrace.ErrorInfo) => _Result;
        finished: () => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const WorkspaceSubmissionUpdateInfo = {
    running: (value: SeedTrace.RunningSubmissionState): SeedTrace.WorkspaceSubmissionUpdateInfo.Running => {
        return {
            value: value,
            type: "running",
            _visit: function <_Result>(
                this: SeedTrace.WorkspaceSubmissionUpdateInfo.Running,
                visitor: SeedTrace.WorkspaceSubmissionUpdateInfo._Visitor<_Result>,
            ) {
                return SeedTrace.WorkspaceSubmissionUpdateInfo._visit(this, visitor);
            },
        };
    },

    ran: (value: SeedTrace.WorkspaceRunDetails): SeedTrace.WorkspaceSubmissionUpdateInfo.Ran => {
        return {
            ...value,
            type: "ran",
            _visit: function <_Result>(
                this: SeedTrace.WorkspaceSubmissionUpdateInfo.Ran,
                visitor: SeedTrace.WorkspaceSubmissionUpdateInfo._Visitor<_Result>,
            ) {
                return SeedTrace.WorkspaceSubmissionUpdateInfo._visit(this, visitor);
            },
        };
    },

    stopped: (): SeedTrace.WorkspaceSubmissionUpdateInfo.Stopped => {
        return {
            type: "stopped",
            _visit: function <_Result>(
                this: SeedTrace.WorkspaceSubmissionUpdateInfo.Stopped,
                visitor: SeedTrace.WorkspaceSubmissionUpdateInfo._Visitor<_Result>,
            ) {
                return SeedTrace.WorkspaceSubmissionUpdateInfo._visit(this, visitor);
            },
        };
    },

    traced: (): SeedTrace.WorkspaceSubmissionUpdateInfo.Traced => {
        return {
            type: "traced",
            _visit: function <_Result>(
                this: SeedTrace.WorkspaceSubmissionUpdateInfo.Traced,
                visitor: SeedTrace.WorkspaceSubmissionUpdateInfo._Visitor<_Result>,
            ) {
                return SeedTrace.WorkspaceSubmissionUpdateInfo._visit(this, visitor);
            },
        };
    },

    tracedV2: (value: SeedTrace.WorkspaceTracedUpdate): SeedTrace.WorkspaceSubmissionUpdateInfo.TracedV2 => {
        return {
            ...value,
            type: "tracedV2",
            _visit: function <_Result>(
                this: SeedTrace.WorkspaceSubmissionUpdateInfo.TracedV2,
                visitor: SeedTrace.WorkspaceSubmissionUpdateInfo._Visitor<_Result>,
            ) {
                return SeedTrace.WorkspaceSubmissionUpdateInfo._visit(this, visitor);
            },
        };
    },

    errored: (value: SeedTrace.ErrorInfo): SeedTrace.WorkspaceSubmissionUpdateInfo.Errored => {
        return {
            value: value,
            type: "errored",
            _visit: function <_Result>(
                this: SeedTrace.WorkspaceSubmissionUpdateInfo.Errored,
                visitor: SeedTrace.WorkspaceSubmissionUpdateInfo._Visitor<_Result>,
            ) {
                return SeedTrace.WorkspaceSubmissionUpdateInfo._visit(this, visitor);
            },
        };
    },

    finished: (): SeedTrace.WorkspaceSubmissionUpdateInfo.Finished => {
        return {
            type: "finished",
            _visit: function <_Result>(
                this: SeedTrace.WorkspaceSubmissionUpdateInfo.Finished,
                visitor: SeedTrace.WorkspaceSubmissionUpdateInfo._Visitor<_Result>,
            ) {
                return SeedTrace.WorkspaceSubmissionUpdateInfo._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): SeedTrace.WorkspaceSubmissionUpdateInfo._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: SeedTrace.WorkspaceSubmissionUpdateInfo._Unknown,
                visitor: SeedTrace.WorkspaceSubmissionUpdateInfo._Visitor<_Result>,
            ) {
                return SeedTrace.WorkspaceSubmissionUpdateInfo._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedTrace.WorkspaceSubmissionUpdateInfo,
        visitor: SeedTrace.WorkspaceSubmissionUpdateInfo._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "running":
                return visitor.running(value.value);
            case "ran":
                return visitor.ran(value);
            case "stopped":
                return visitor.stopped();
            case "traced":
                return visitor.traced();
            case "tracedV2":
                return visitor.tracedV2(value);
            case "errored":
                return visitor.errored(value.value);
            case "finished":
                return visitor.finished();
            default:
                return visitor._other(value as any);
        }
    },
} as const;
