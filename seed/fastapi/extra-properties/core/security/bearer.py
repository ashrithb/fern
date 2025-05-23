# This file was auto-generated by Fern from our API Definition.

from ..exceptions import UnauthorizedException

import fastapi


class BearerToken:
    def __init__(self, token: str):
        self.token = token


def HTTPBearer(request: fastapi.requests.Request) -> BearerToken:
    authorization_header_value = request.headers.get("Authorization")
    if not authorization_header_value:
        raise UnauthorizedException("Missing Authorization header")
    scheme, _, token = authorization_header_value.partition(" ")
    if scheme.lower() != "bearer":
        raise UnauthorizedException("Authorization header scheme is not bearer")
    if not token:
        raise UnauthorizedException("Authorization header is missing a token")
    return BearerToken(token)
