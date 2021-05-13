## Description

This app it's been designed as an adhoc tool to help my couple and me organize our wedding. Its main purpose is to get attendants engaged with the event, by providing them with an easy and playful way to participate and help shape it. Additionally, we plan to use it as a tool to prompt and facilitate the attendant's monetary contribution, so we can better track and manage expenditure. 

## Technologies

- Base language: JavaScript
- Front end libraries & frameworks: React.js, Material UI
- Back end: Node.js + Express.js,
- Online payment integration (Paypal?, Stripe?)
- Spotify API

## User stories / Features

- **Restricted log in (via special predefined code):** The app IS NOT open to the general public, but only to the designated wedding attendees. As an *anonymous user* trying to access the app, the visitor will find a simple welcome page providing a rapid overview of its purpose, along with an authentication form. Operational credentials for wedding attendees are already preset (username & password) and stored in the database, then distributed to them at the moment of formal invitation.


  There is a generic authorized user created for testing and presentational purposes. For anyone interested to check out the app, it can be shared upon prior request.

- **Countdown chronometer:** There is a countdown chronometer immediately visible upon access to the app (big font close-up). It shows the days left until the event. After user interaction (click, scroll, keydown or any other similar event), it moves away to a corner of the screen and minimizes itself. Its appearance can vary depending on certain milestones being reached.

- **Bride & Groom quiz:** A *Trivial Pursuit*-like game centered on the protagonists of the event. Participants get asked questions about the bride and the groom and can test their knowledge about them both. Scores dependant on the amount of successful answers get stored in the database and used to determine a winner (or winners) of the quiz, who will then be presented with some sort of courtesy prize on the day of the celebration.

  

- **Filterable picture gallery:** A tool to showcase and celebrate the couple's life together and its highlights, either in the form of a picture board or a slideshow. It features a search bar and checkboxes aimed for sorting and filtering (all pictures are accordingly tagged), so as to facilitate the attendee's curiosity. 

  

- **Wedding marketplace:** The app features a simulated ecommerce platform, displaying fantasy products and services that would help fulfill the couple's dreams. As in a traditional platform, the listed fake products and services (such a rocket journey to the Moon or a pet unicorn) are available for REAL purchase. They can be added to a shopping cart (wedding cart) and paid for via an online payment gateway. By default, all the money derived from the purchases is credited to the couple's account (as a form of gift or contribution to the event), except for those purchases linked to solidary causes or NGO projects, which instead revert on the favoured association.
  
- **Playlist creator:** By means of the Spotify API, this functionality allows the users to browse songs and add their favorites to the playlist of the wedding. This tool ensures the music played during the event will be relevant to everyone.

- **Special requirements form:** A form to be filled out by the users in case they have special needs that must be adressed beforehand, such as food allergies or the need for lodging. The info gets stored in the database and acted upon accordingly.
  
- **Log out:** Easy peasy. Whenever users click on this option, they quit the app and get redirected to the main page as anonymous users.

## Page / Component structure

### General Page Overview:

`<App>`

​	**`<HeaderNavbar />`** **!!!***

​		`<Home />`

​		`<Info />`

​		`<Quiz />`

​		`<Market />`

​		`<Requests />`

​	**`<FooterNavbar />`** **!!!***

`</App>`



**!!!* These components only get rendered for registered users**



### Page Breakdown:

#### HOME

This is the main/landing page of the app. It presents its purpose at a glance and serves as the central hub for the app's navigation. It also summarizes key data & facts that get expanded in the rest of the sections, in a presentational manner:



`<Home>`

​	`<! --Fixed welcome & presentational content-- >`

​	`<Countdown />`

​	`<! --Unregistered entry warning-- >` 

​			`||`

​	``<! --Fixed welcome & presentational content-- >`` **!!!***

​	`<ActivityMenu>` **!!!***

`</Home>`



**!!!* These components only get rendered for registered users**



#### INFO

A static page intented for providing information and directions about the date and place of the celebration:



`<Info>`

​	`<ActivityMenu />`

​	`<WhenInfo>`

​		`<! --Information about time-- >`

​		`<Countdown />`

​	`</WhenInfo>`	

​	`<WhereInfo>`

​		`<! --Information about place-- >`

​		`<Carousel />`

​		`<! --Description of the place of the celebration-- >` 

​		`<Map />`

​	`</WhereInfo>`

​	`<HowInfo>`

​		`<Schedule />`

​		``<! --Bride & groom contact information-- >``

​	`</HowInfo>`

`</Info>`



#### QUIZ

#### MARKET

#### REQUESTS



#### Component Breakdown:

#### - <HeaderNavbar />

A... (pending)

*Comprises:* <LangSelect />, <LogOut>, <ShoppingCart>

#### - <FooterNavbar />

A presentational component with no sub-components aimed at facilitating the navigation between the different pages that compose the app.

#### - <LangSelect />

This component manages language selection, through props received from the main component (<App />). It renders a set of buttons that alter the state of the main component and switch the language in which the whole app is displayed.

#### - <Countdown />

The purpose of this component is to establish the current date and calculate the days remaining until the wedding. It displays the countdown according to language selection.

#### - <ActivityMenu />

(pending refactoring) A simple presentational component serving as a call to action and containing links to the pages where users are supposed to take some action.

