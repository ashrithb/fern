# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic
from ...core.pydantic_utilities import update_forward_refs


class SecondUnionSecondElement(UniversalBaseModel):
    child: "FirstUnion"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


from .first_union_first_element import FirstUnionFirstElement  # noqa: E402
from .first_union_second_element import FirstUnionSecondElement  # noqa: E402
from .second_union_first_element import SecondUnionFirstElement  # noqa: E402
from .first_union import FirstUnion  # noqa: E402

update_forward_refs(SecondUnionSecondElement)
