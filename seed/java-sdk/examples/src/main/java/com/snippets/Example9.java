package com.snippets;

import com.seed.examples.SeedExamplesClient;

public class Example9 {
    public static void main(String[] args) {
        SeedExamplesClient client = SeedExamplesClient
            .builder()
            .token("<token>")
            .url("https://api.fern.com")
            .build();

        client.health().service().check("id");
    }
}