==============Installation==============<br />
1) Open command line<br />
2) Go to the root of the project<br />
3) Type: npm install and press enter<br />
4) Type: bower install and press enter<br />
<br />
==============Development================<br />
<br />
Command line:<br />
1) Open command line<br />
2) Go to the root of the project<br />
3) Type: gulp webserver-dev<br />
4) Visit: localhost:8081 in browser<br />
<br />
Webstorm IDE:<br />
1) Click on "Edit Configurations..." next to play button<br />
2) Click on (+) and choose Gulp.js<br />
3) Name it "Run Dev" and insert into "Tasks": webserver-dev<br />
<br />
Now you can choose the wished task and run it with the play button<br />
<br />
==============Distribution==============<br />
<br />
Command line:<br />
1) Open command line<br />
2) Go to the root of the project<br />
3) Type: gulp build<br />
<br />
(Optional for testing):<br />
4) Type: gulp webserver-dist<br />
5) Visit: localhost:8080 in browser<br />
<br />
Webstorm IDE:<br />
1) Click on "Edit Configurations..." next to play button<br />
2) Click on (+) and choose Gulp.js<br />
3) Name it "Build" and insert into "Tasks": build<br />
<br />
(Optional for testing):<br />
4) Click on (+) and choose Gulp.js<br />
5) Name it "Run Dist" and insert into "Tasks": webserver-dist<br />
<br />
Now you can choose the wished task and run it with the play button<br />
<br />
Gulp "compiles" the project into "dist" folder. You can just place the whole content of "dist" on any webserver.<br />