# CommitTwo
Commit to a New You! CommitTwo is a web-based motivation app that pairs people up and uses geographic location to verify the completion of goals. 2018 LA Hacks project. 
## repo structure
- app/committwo/www/ front end 
-  server/ php and python files here
	- server/storage gitignored: data associated with users and goals (DO NOT PUSH) 

## Inspiration
As college students, we all had lots of experience setting goals and failing to accomplish them. We had also felt lonely when pursuing even those aspirations that we did eventually achieve. So we wanted to create an App addressing those issues and help people who are in a similar situation as us.

## What it does
CommitTwo is designed to help two individuals achieve mutually shared goals by tying the success of the two together. Each individual will gain points when they or their partner make steps productive to their goal and likewise, both partners lose points when they or their partner engage in activity counterproductive to their goal.

As partners accumulate points, they become eligible for rewards. Beneficial and Detrimental action is dependent on the duo's shared goal. For example, if the teammates goal is to avoid unhealthy foods, they would get points for eating at healthy restaurants, but lose points if either of them chose to eat a meal at a fast food restaurant. Additionally, when the team members commit to each other, they also agree to check in and log their actions at a certain frequency, also dependent on the specific goal. A check in simply requires that the team member open the app at a certain time or frequency, thereby allowing for verification that they are staying true to their commitment. If the team member does not fulfill this check in requirement, both they and their partner automatically lose points, regardless of whether they actually kept their commitment. As each partner makes an effort to help their teammate succeed, they will ultimately end up succeeding themselves!

CommitTwo users may directly choose to their partner if they have a friend working towards a shared goal. For users who are not directly selecting their partner, CommitTwo will find an individual of a similar age and residence to be their partner. Additionally, as users spend more time selecting rewards, CommitTwo is able to learn more about the users interests and pair together individuals with shared interests and hobbies. Not only can CommitTwo be a great way to reach your goals, but it becomes an opportunity to meet friends along the way!

## How we built it
In order to reach the most audience with our app, we wanted to make it cross-platform and decided on using Apache Cordova to encapsulate our web-based application. Our app has a front end built with html and bootstrap as well as a back end supported by python and SQL hosted on an AWS EC3 instance. Most of the development was done in text editors, with adjustments made in Xcode to tune up the performance of the iOS version of our app.

## Challenges we ran into
*Max:* Our team had a varied amount web development experience so it was a major challenge to get all team members up to speeds with the technologies necessary for creating this App. Also, most team members have no experience developing an APP from scratch, so each stage in the development process presented some challenge. Those include installing our demo onto a device, signing, collaboration using a version control system and following good software engineering practices.

*Cathy:* I think the major challenge is that only one of us can code in JavaScript so we didn't finish the front end part of the user system. Also, server configuration and cordova setup took up too much time.

*Nicole:* I think one of the largest challenges I faced was working with languages that my teammates may have been familiar with , but that I have not prior knowledge with. This required a lot of learning on the spot and making use of the resources available to us.

*Richard:* A challenge I faced was definitely not being able to translate my skillset into something useful for the team. Perhaps it was just the rushed team formation.

*William:* One challenge I faced was making use of the limited languages I know, but using an API made it easier to get more done with them.

## Accomplishments that we are proud of
We are really proud that we conceived something meaningful and carried our ideas to fruition.

## What We learned
Each team member gained valuable experience developing for the web and calling API's provided by third parties.

## What's next for CommitTwo
We look forward to developing our app in full and roll our different, fully functional versions for android and web with a user system and matching algorithms.

## Built With
`apache`
`xcode`
`ionic`
`foursquare`
`amazon-web-services`
`python`