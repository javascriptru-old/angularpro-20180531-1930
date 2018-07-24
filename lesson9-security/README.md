# ACL

- Roles
- Resources
- Permissions

ngx-permissions

admin - manager - user



# JWT

- header
- payload
- signature

base64(header).base64(payload).HMACSHA256(base64(header), base64(payload), secret)


# XSS

Comment:  <script>alert('Hello!')</script>

- HTML
- Style
- URL
- Resource URL

sanitizer


# XSRF

BADDOMAIN.COM POST(delete all users) -> YOURDOMAIN.COM

CORS

header + cookie  => header ?= cookie

"X-XSRF-TOKEN"

HttpClientXsrfModule.withOptions({
    cookieName: 'My-Xsrf-Cookie',
    headerName: 'My-Xsrf-Header',
}),

RFC6265
Same-site Cookies