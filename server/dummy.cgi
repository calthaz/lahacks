#!/usr/bin/python3


#!D:\Python\Python36\python.exe 

import cgi
import cgitb; cgitb.enable()  # for troubleshooting
import json, requests

print ("Content-type: text/html");
print ();

print ("""
<html>

<head><title>Dummy Py</title></head>

<body>

  <h1> Dummy Py </h1>
  <h3> Field Storage </h3>
""");

form = cgi.FieldStorage();
variable = "";
value = "";
r = "";
lat = ""; 
lon = "";
for key in form.keys():
	variable = str(key);
	value = str(form.getvalue(variable));
	print ("<p>"+ variable +", "+ value +"</p>\n" );
	if (variable=="lat"):
		lat = form[key].value
		print("lat \n")
	if (variable=="lon"):
		lon = form[key].value
		print("lon \n")

if(lat != "" and lon != ""):

	url = 'https://api.foursquare.com/v2/venues/search'
	s = lat+","+lon
	print("Location sent:"+s+" \n")
	
	params = dict(
		client_id='MJDWI4DZ2IDHDD5Z2EXFKD4PDW1LRFGTE2R0AE00XQKUFAHU',
		client_secret='ZY11PYIJNJHGXMWGT2WB1APA5IB1ES2MYAPW2DUNR4WDJQE2',
		v='20180323',
		ll=s,
		intent='checkin',
		#query='gym',
		radius = 6000,
		#limit=1
	)

	resp = requests.get(url=url, params=params)
	data = json.loads(resp.text)

	#data = {'meta': {'code': 400, 'errorDetail': 'Invalid geo coordinates (134.000000,124.000000)', 'errorType': 'param_error', 'requestId': '5ac032d1351e3d4dfc99a671'}, 'response': {}}
	print(json.dumps(data["response"]["venues"][0:4], sort_keys=True, indent=2, separators=(',',': ')))
	#print(json.dumps(data["response"]["venues"]))


print ("""
</body>
</html>
""");