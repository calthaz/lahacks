#!D:\Python\Python36\python.exe 

import cgi
import cgitb; cgitb.enable()  # for troubleshooting

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
for key in form.keys():
        variable = str(key);
        value = str(form.getvalue(variable));
        print ("<p>"+ variable +", "+ value +"</p>\n" );

print ("""
</body>
</html>
""");