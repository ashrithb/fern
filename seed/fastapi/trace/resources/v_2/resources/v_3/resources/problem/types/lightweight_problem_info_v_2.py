# This file was auto-generated by Fern from our API Definition.

from ........core.pydantic_utilities import UniversalBaseModel
from .......commons.types.problem_id import ProblemId
import pydantic
import typing
from .......commons.types.variable_type import VariableType
from ........core.pydantic_utilities import IS_PYDANTIC_V2


class LightweightProblemInfoV2(UniversalBaseModel):
    problem_id: ProblemId = pydantic.Field(alias="problemId")
    problem_name: str = pydantic.Field(alias="problemName")
    problem_version: int = pydantic.Field(alias="problemVersion")
    variable_types: typing.List[VariableType] = pydantic.Field(alias="variableTypes")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="forbid")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
