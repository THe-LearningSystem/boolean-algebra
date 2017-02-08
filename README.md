==============Installation==============
1) Open command line
2) Go to the root of the project
3) Type: npm install and press enter
4) Type: bower install and press enter

==============Development================

Command line:
1) Open command line
2) Go to the root of the project
3) Type: gulp webserver-dev
4) Visit: localhost:8081 in browser

Webstorm IDE:
1) Click on "Edit Configurations..." next to play button
2) Click on (+) and choose Gulp.js
3) Name it "Run Dev" and insert into "Tasks": webserver-dev

Now you can choose the wished task and run it with the play button

==============Distribution==============

Command line:
1) Open command line
2) Go to the root of the project
3) Type: gulp build

(Optional for testing):
4) Type: gulp webserver-dist
5) Visit: localhost:8080 in browser

Webstorm IDE:
1) Click on "Edit Configurations..." next to play button
2) Click on (+) and choose Gulp.js
3) Name it "Build" and insert into "Tasks": build

(Optional for testing):
4) Click on (+) and choose Gulp.js
5) Name it "Run Dist" and insert into "Tasks": webserver-dist

Now you can choose the wished task and run it with the play button

Gulp "compiles" the project into "dist" folder. You can just place the whole content of "dist" on any webserver.