# React Tap Room

![alt text](https://raw.githubusercontent.com/thacheshirecat/react-tap-room/master/src/assets/images/TapRoomMap.png)

## Author
  * Alex Bunnell

### Project Overview
  * This project was created using React. It is a review of the fundamentals of React including components, props and routing.
  * Project is to recreate an existing project made using Angular.js of a Tap Room app
  * Project is only front end, no back end functionality at this point

#### Specs
  * App should display a header above each page
  * App should open to a Home page
  * App should allow user to navigate to list of brews
  * App should allow user to navigate to a form for adding new brews (no functionality currently)
  * App should allow users to navigate to an About Us page
  * App should include an error 404 page for incorrect paths

##### Set Up and Installation
  * Clone repository from https://github.com/thacheshirecat/react-tap-room
  * Navigate to the root folder in the console and run $ npm install
  * Run $ npm run start
  * Navigate to LocalHost:8080 in your browser

##### Issues / Questions
  * At this point there have not been any unforeseen issues in the development process. Installation and set up of the React Environment went smoothly, each component has been working as intended.
  * One question is whether global jsx styling can be added to child components or only the App component? If I add global styling to a child of App, would only that child and any of that child's children get those 'global' styling rules? I initial added global styling rules to Home which was a child of App but had no children, then later had to move those 'global' rules up into App.

##### Thoughts on React vs Angular
  * React is interesting. When first starting Angular I enjoyed the analogy to learning how to operate certain types of machinery. Learning basic JS and JQuery was like learning to drive a manual car for the first time, some hiccups but overall not too difficult. When we started heading towards Angular by learning Node that felt like it was more like learning how to fly a plane, a lot of dials a nobs to turn before take off, however once you got there the mechanics of flying were pretty smooth. Once we actually got to Angular it felt more like trying to operate a Gundam in space (reference: https://pre00.deviantart.net/831a/th/pre/f/2007/120/f/9/hi_nu_gundam_space_saber_by_zpaolo.jpg). Very powerful, but a lot to take in and try and link up and understand in order to produce the desired results. React is interesting in that, at least here in the first parts before back end functionality, it does not feel like stepping into a super complicated framework, yet it does still feel powerful. It feels more like using Node, a bit of set up and then somewhat smooth sailing, without all of the complexities of Angular but many of the advantages.
  * However, there is something strange about mashing up all the code within a given component (.jsx) file. The components of Angular did feel unwieldy being broken down into the traditional 3 pieces (HTML, CSS, JS/TS), yet this was also familiar with how we have been coding up to this point. The component model seems ideal given its advantages, and it does seem logical to want to bring everything together into one space per component, however I have yet to see how back end logic is integrated at the time of this writing.

###### Licensing
  * This code utilizes an MIT license
