/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type RunningSubmissionState =
    | "QUEUEING_SUBMISSION"
    | "KILLING_HISTORICAL_SUBMISSIONS"
    | "WRITING_SUBMISSION_TO_FILE"
    | "COMPILING_SUBMISSION"
    | "RUNNING_SUBMISSION";
export const RunningSubmissionState = {
    QueueingSubmission: "QUEUEING_SUBMISSION",
    KillingHistoricalSubmissions: "KILLING_HISTORICAL_SUBMISSIONS",
    WritingSubmissionToFile: "WRITING_SUBMISSION_TO_FILE",
    CompilingSubmission: "COMPILING_SUBMISSION",
    RunningSubmission: "RUNNING_SUBMISSION",
} as const;
