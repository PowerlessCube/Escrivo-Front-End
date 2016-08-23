#Design Brief - Three Tabbed Box
Design and build a three tabbed box based on the wireframes and content provided. Ultimately this is expected to go in a sidebar of a larger website.

The client is a Florist, looking for a clean, functional employee portal. The site has a heavy focus on fast page load times, to allow a fast and e client work environment.

Feel free to use your preferred development tools and environment for this example. We would like you to deliver a functioning prototype, to your own design, based on these wireframes:

#Tab 1:
**Title:**
	Equipment
**Content:**
	24 Images of varying sizes.

#Tab 2:
**Title:**
	Instructions
**Content:**
	Three paragraphs of text

#Tab 3:
**Title:**
	Location
**Content:**
	Interactive map with marker centred on a location that would be chosen in the system.
	For this example use **EH1 1SX**

#Container Dimensions:
	**Mobile**
		**Width:** Fills width of screen
		**Height:** Appropriate to height

	**Desktop**
		**Width:** 300px
		**Height:** 380px;

#Tools Used:
- React
- Webpack

#Development Links
the below is a list of links and information I used to help create this app:
- http://learn.shayhowe.com/html-css/positioning-content/
- http://stackoverflow.com/questions/29532356/google-maps-in-react
- http://codepen.io/trey/post/tabbed-navigation-react

#App Development
- this app was developed using a Macbook Pro, the below instructions are for installing the app via unix command lines.

#Installation
To install the dependencies and run the webapp locally on port 3000, follow the below instructions:
- Using Unix Terminal, clone the following SSH key to your chosen directory:
```
git clone git@github.com:PowerlessCube/Escrivo-Front-End.git
```
- navigate to the following folder level and type the following to app dependencies:

$EscrivoFrontEnd/
```
npm install
```
- to run the server file on your local host type the following:

$EscrivoFrontEnd/
```
npm start
```

- open a new terminal tab and navigate to the client level and type the following to install further dependencies:
$EscrivoFrontEnd/client/
```
npm install
```
- once installed run webpacker by typing the following:
$EscrivoFrontEnd/client/
```
npm start
```

- in your web browser of choice type in the following url to view the app:
```
localhost:3002/
```
