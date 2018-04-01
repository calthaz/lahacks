import mysql.connector
from mysql.connector import errorcode
class User:
   def __init__(self, name, goal, age, location):
      self.name = name
      self.age = age
      self.goal = goal
      self.location = location


   def __eq__(self, other):
      return type(other) == User and other.name == self.name and other.age == self.age and other.goal == self.goal and other.location == self.location
   def __repr__(self):
      return "Item(%r, %r, %r, %r)"%(self.name, self.goal, self.age, self.location)

try:
    cnx = mysql.connector.connect(user='caltha', password='calthaWork',
                              host='127.0.0.1',
                              database='sql')

    User_list = []
    cursor = cnx.cursor()
    cur.execute('SELECT username VARCHAR, goal_list TEXT, age VARCHAR, zip_code INT from cnx')
    row = cur.fetchone()
    User1 =  User(row[0], row[1], row[2], row[3])
    User_list.append(User1)
    while row != None:
        row = cursor.fetchone()
        User1 = User(row[0], row[1], row[2], row[3])
        User_list.append(User1)

except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Something is wrong with your user name or password")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Database does not exist")
    else:
        print(err)
else:
  cnx.close()

def main(userA):
    goals = userA.goal;
    goals.split(";")
    for x in goals:


def calculate_distance(locationA, locationB):
    return locationA-locationB


def find_match(userA, users):
    goal = userA.goal
    age = userA.age
    loc = userA.location
    bestOption = userA
    for userX in users:
        if userX.goal == userA.goal:
            if bestOption == userA:
                bestOption = userX
            elif userX.age == userA.age and bestOption.age != userA.age:
                bestOption = userX
            elif userX.age ==userA.age and calculate_distance(userX.location, userA.location) < calculate_distance(bestOption.location, userA.location):
                bestOption = userX
    return bestOption







