// This file was auto-generated by Fern from our API Definition.

package v1

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/fern-api/fern-go/internal/testdata/model/packages/fixtures/internal"
)

type Baz struct {
	Name string `json:"name" url:"name"`

	extraProperties map[string]interface{}
}

func (b *Baz) GetName() string {
	if b == nil {
		return ""
	}
	return b.Name
}

func (b *Baz) GetExtraProperties() map[string]interface{} {
	return b.extraProperties
}

func (b *Baz) UnmarshalJSON(data []byte) error {
	type unmarshaler Baz
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*b = Baz(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *b)
	if err != nil {
		return err
	}
	b.extraProperties = extraProperties
	return nil
}

func (b *Baz) String() string {
	if value, err := internal.StringifyJSON(b); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", b)
}
