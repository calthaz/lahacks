#!D:\Python\Python36\python.exe 

import cgi
import cgitb
import json
import requests

cgitb.enable()  # for troubleshooting

print("Content-type: text/html")
print("Access-Control-Allow-Origin: * \n\n")
'''
print()

print("""
<html>

<head><title>Foursquare API</title></head>

<body>

<h1></h1>
<h3>Venues Search</h3>
""")
'''
scoreFile = 'storage/score.txt'
form = cgi.FieldStorage()
variable = ""
value = ""
r = ""

lat = ''
lon = ''
cat = ''
ven = ''
ret = {}

for key in form.keys():
    variable = str(key)

    if variable == "lat":
        lat = form[key].value
    elif variable == "lon":
        lon = form[key].value
    elif variable == 'cat':
        cat = form[key].value
    else:
        ret['msg']="Did not return lat or lon or cat";

if lat != '' and lon != '' and cat != '':

    categoryID = ''
    if cat == "fitness":
        categoryID = "4f4528bc4b90abdf24c9de85,4bf58dd8d48988d15e941735"
    elif cat == "school":
        categoryID = "4bf58dd8d48988d13b941735,4bf58dd8d48988d12f941735,4d4b7105d754a06372d81259"
    elif cat == "experience":
        categoryID = "4d4b7104d754a06370d81259"
    else:
        ret = {"msg":"CATEGORY DOES NOT EXIST"}

    url = 'https://api.foursquare.com/v2/venues/search'
    s = lat + "," + lon

    params = dict(
        client_id='MJDWI4DZ2IDHDD5Z2EXFKD4PDW1LRFGTE2R0AE00XQKUFAHU',
        client_secret='ZY11PYIJNJHGXMWGT2WB1APA5IB1ES2MYAPW2DUNR4WDJQE2',
        v='20180323',
        ll=s,
        radius=500,
        intent='checkin',
        categoryId=categoryID,
        limit=1
    )

    resp = requests.get(url=url, params=params)
    data = json.loads(resp.text)
    
    if len(data["response"]["venues"]) == 0:
        #print("NO VENUES FOUND")
        ret = {"msg":"failed"}
    else:
        #print("VENUE(S) FOUND")
        ret = {"msg":"success", "venue":data["response"]["venues"][0]}

ret['scorefile'] = scoreFile;
    #print(len(data["response"]["venues"]))
print(json.dumps(ret))
    #print(json.dumps(data["response"]["venues"][0:5], sort_keys=True, indent=2, separators=(',', ': ')))
'''

print("""
</body>
</html>
""")
'''