/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.streaming.resources.dummy;

import com.seed.streaming.core.ClientOptions;
import com.seed.streaming.core.RequestOptions;
import com.seed.streaming.resources.dummy.requests.GenerateStreamRequest;
import com.seed.streaming.resources.dummy.requests.Generateequest;
import com.seed.streaming.resources.dummy.types.StreamResponse;
import java.util.concurrent.CompletableFuture;

public class AsyncDummyClient {
    protected final ClientOptions clientOptions;

    private final AsyncRawDummyClient rawClient;

    public AsyncDummyClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.rawClient = new AsyncRawDummyClient(clientOptions);
    }

    /**
     * Get responses with HTTP metadata like headers
     */
    public AsyncRawDummyClient withRawResponse() {
        return this.rawClient;
    }

    public CompletableFuture<Iterable<StreamResponse>> generateStream(GenerateStreamRequest request) {
        return this.rawClient.generateStream(request).thenApply(response -> response.body());
    }

    public CompletableFuture<Iterable<StreamResponse>> generateStream(
            GenerateStreamRequest request, RequestOptions requestOptions) {
        return this.rawClient.generateStream(request, requestOptions).thenApply(response -> response.body());
    }

    public CompletableFuture<StreamResponse> generate(Generateequest request) {
        return this.rawClient.generate(request).thenApply(response -> response.body());
    }

    public CompletableFuture<StreamResponse> generate(Generateequest request, RequestOptions requestOptions) {
        return this.rawClient.generate(request, requestOptions).thenApply(response -> response.body());
    }
}
