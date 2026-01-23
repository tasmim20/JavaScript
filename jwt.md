JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

What is the JSON Web Token structure?

In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:

Header
Payload
Signature

Therefore, a JWT typically looks like the following:

xxxxx.yyyyy.zzzzz

Let's break down the different parts.

Header
The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.

Payload
The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.

Signature
To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

✅ What is Base64URL?

Base64URL is a way to encode data (like JSON in a JWT) into text that is safe to use in URLs, cookies, and HTTP headers.

It is similar to Base64 but with small changes to avoid characters that cause problems in URLs.

When a user signs in with their email and password, the backend returns two tokens:

1. Refresh Token (long-lived)

Stored in an HttpOnly cookie, which prevents JavaScript from accessing it.
This protects the application from XSS attacks since the refresh token can’t be read or modified on the client.
The server should ideally keep track of active refresh tokens and invalidate older ones so they can’t be reused if stolen.

2. Access Token (short-lived)

Returned to the client and stored either in localStorage or in memory.
This token contains the user’s claims and role information and is used in the Authorization: Bearer <token> header for protected API calls.
**
Refreshing the Access Token**
Access tokens are intentionally short-lived. When one expires:
The API call will fail with a 401 or “token expired”.
An axios interceptor catches this failed request.
It automatically calls the refresh endpoint.
The server verifies the HttpOnly refresh token and issues a new access token.
The interceptor updates the access token and retries the original request.
This creates a seamless experience for the user.
Some developers also schedule a background refresh using setTimeout to renew the token before expiration — but this should be in addition to the interceptor, not a replacement.
This creates a seamless experience for the user.

Some developers also schedule a background refresh using setTimeout to renew the token before expiration — but this should be in addition to the interceptor, not a replacement.
Logout

To log out:
Ask the server to clear the HttpOnly cookie that contains the refresh token.
Remove the access token from memory or localStorage.
Reset any user state in your Context/Redux store.

Refresh Tokens and Rotation

Access tokens are short-lived and used on every request. They prove the user identity quickly. Refresh tokens live longer and are used only to get new access tokens when the old ones expire. This split keeps day-to-day requests fast and limits the damage if a token leaks.

We will store the refresh token in an HTTP-only cookie. This reduces exposure to scripts and keeps the flow smooth.

Key Points to Remember

Two Tokens:

Access Token → short-lived, used for API requests.

Refresh Token → long-lived, stored in HttpOnly cookie, used to get new access tokens.

Storage:

Access Token → memory or localStorage.

Refresh Token → HttpOnly cookie (protects from XSS).

Refreshing Access Token:

When expired → API returns 401.

Interceptor calls refresh endpoint.

Server verifies refresh token → issues new access token.

Original request is retried automatically.

Logout:

Clear HttpOnly refresh token cookie.

Remove access token from client.

Reset user state in frontend store.

Why this flow:

Access tokens are short → limits exposure.

Refresh tokens are secure → reduce risk.

Split keeps day-to-day requests fast and secure.
