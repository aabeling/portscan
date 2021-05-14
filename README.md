**This repo has been archived. I will not work on it anymore.**

---

Port scanning with Javascript

The index.html shows how it can be used.
Further notes about the implementation can be
found in portscanner.js (use the source, Luke).

The portscanning function is taken from
http://www.gnucitizen.org/blog/javascript-port-scanner/
written by Petko Petkov.

The check is based on the fact that loading an image from a blocked
host and port do not return. You can try this with e.g.
```
curl -v --connect-timeout 10 http://github.com:8080
```
This will block for 10 seconds.     
This check does not work for `localhost` because
```
curl -v --connect-timeout 10 http://localhost:8000
```
returns immediately with a 
`Failed to connect to localhost port 8000`.

It needs jquery.

The preview of the index.html is not working anymore, don't know why and I will not investigate:
http://htmlpreview.github.io/?https://raw.github.com/aabeling/portscan/master/index.html
