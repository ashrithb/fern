/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.unions.resources.bigunion.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.unions.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = AttractiveScript.Builder.class)
public final class AttractiveScript {
    private final String value;

    private final Map<String, Object> additionalProperties;

    private AttractiveScript(String value, Map<String, Object> additionalProperties) {
        this.value = value;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("value")
    public String getValue() {
        return value;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof AttractiveScript && equalTo((AttractiveScript) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(AttractiveScript other) {
        return value.equals(other.value);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.value);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static ValueStage builder() {
        return new Builder();
    }

    public interface ValueStage {
        _FinalStage value(@NotNull String value);

        Builder from(AttractiveScript other);
    }

    public interface _FinalStage {
        AttractiveScript build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements ValueStage, _FinalStage {
        private String value;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(AttractiveScript other) {
            value(other.getValue());
            return this;
        }

        @java.lang.Override
        @JsonSetter("value")
        public _FinalStage value(@NotNull String value) {
            this.value = Objects.requireNonNull(value, "value must not be null");
            return this;
        }

        @java.lang.Override
        public AttractiveScript build() {
            return new AttractiveScript(value, additionalProperties);
        }
    }
}
