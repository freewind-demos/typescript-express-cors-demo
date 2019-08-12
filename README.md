TypeScript Express CORS Demo
============================

```
npm install
npm run demo
```

Then with 'httpie':

```
http localhost:3000/data.json
```

Will see:

```
http localhost:3000/data.json
HTTP/1.1 200 OK
Accept-Ranges: bytes
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=0
Connection: keep-alive
Content-Length: 38
Content-Type: application/json; charset=UTF-8
Date: Mon, 12 Aug 2019 08:46:12 GMT
ETag: W/"26-16c850055b5"
Last-Modified: Mon, 12 Aug 2019 08:44:47 GMT
X-Powered-By: Express

{
    "hello": "Hello from data.json"
}

```

Notice it has response header: `Access-Control-Allow-Origin: *`
