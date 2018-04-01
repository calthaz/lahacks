#!D:\Python\Python36\python.exe 

from sys import *

import cgi
import cgitb
import json
import requests

cgitb.enable()  # for troubleshooting

def add_points(file):
    Open_file = open(file, 'r')
    score = Open_file.read().strip()
    if(score==""):
        score="0";
    value = int(score)
    #print(value);
    new  = value + 1
    Open_file.close()
    #file2 = Open_file.replace(score, new)

    newFile = open(file,'w')
    newFile.write(str(new))
    newFile.close();

    return new


def replace(file, score, new):
    file = file.replace(score, new)
    return file

form = cgi.FieldStorage()
variable = ""
value = ""
r = ""

scorefile = '';
ret = {}

print("Content-type: text/html\n\n")
#print(add_points("storage/score.txt"))
for key in form.keys():
    variable = str(key)
    if variable == "scorefile":
        scorefile = form[key].value
        ret['msg'] = "success"
        ret['score'] = (add_points(scorefile))
    else:
        ret['msg'] = "Did not receive scorefile.";
        ret['score'] = '-1'

print(json.dumps(ret))

