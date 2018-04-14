#!D:\Python\Python36\python.exe 

#!/usr/bin/python

import cgi
import cgitb
import json, requests

cgitb.enable()  # for troubleshooting

print("Content-type: text/html\n\n")
print()

print("""
<html>

<head><title>Dummy Py</title></head>

<body>

<h1> Dummy Py </h1>
<h3> Field Storage </h3>
""")

form = cgi.FieldStorage()
variable = ""
value = ""
r = ""

lat = ''
lon = ''
cat = ''

for key in form.keys():
    variable = str(key)

    if variable == "lat":
        lat = form[key].value
    elif variable == "lon":
        lon = form[key].value
    elif variable == 'cat':
        cat = form[key].value
    else:
        print("did not return lat or lon")


if lat != '' and lon != '' and cat != '':
    url = 'https://api.foursquare.com/v2/venues/search'
    s = lat + "," + lon
    isDone = False
    i = 0

    while not isDone:
        params = dict(
            client_id='MJDWI4DZ2IDHDD5Z2EXFKD4PDW1LRFGTE2R0AE00XQKUFAHU',
            client_secret='ZY11PYIJNJHGXMWGT2WB1APA5IB1ES2MYAPW2DUNR4WDJQE2',
            v='20180323',
            ll=s,
            intent='checkin',
            categoryId=cat,
            radius=0 + i,
            limit=15
        )

        resp = requests.get(url=url, params=params)
        data = json.loads(resp.text)

        print(len(data["response"]["venues"]))
        if len(data["response"]["venues"]) < 5:
            i += 500
            print(i)
        else:
            isDone = True

    print(json.dumps(data["response"]["venues"][0:5], sort_keys=True, indent=2, separators=(',', ': ')))

print("""
</body>
</html>
""")
