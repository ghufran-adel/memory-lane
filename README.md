# Project Title

MemoryLane

## Overview

MemoryLane is an app designed to help parents craft personalized memories of their child's early years. Users can document and celebrate key milestones, memorable moments, and developmental achievements in a convenient and user-friendly interface.

### Problem

Parents often struggle to capture and organize precious moments of their child's early years, leading to fragmented memories. MemoryLane addresses this by providing a streamlined solution for documenting and celebrating these milestones.

### User Profile

- Parents seeking a user-friendly tool to document and celebrate their baby's milestones. They want easy access and management of recorded milestones.

### Features

- As a user, I want to be able to find the closest café close to my current location

- As a user, I want to be able to find the closest café close to any given location

- As a user, I want to be able to find the highest-rated café within a certain distance from any given location

- As a user, I want to be able to create an account .

- As a user, I want to be able to login to my account .

- As a logged in user, I want to be able to record and track key developmental milestones with photo.

- As a logged in user, attach location details to each milestone to capture where the milestone occurred.

- As a logged in user, Sort and filter milestones by date, type, or location.

- As a logged in user, I want to be able to delete or update milestones.

- As a logged in user, I want to be able to add data to growth chart with visual representations .

## Implementation

### Tech Stack

- React

- Express

- Client libraries:

- react

- react-router

- axios

- chart.js

- Server libraries:

- express

- bcrypt for password hashing

### APIs

- No external APIs will be used for the first sprint

### Sitemap

- Home page

- Add Milestone Page

- Edit Milestone Page

- View Milestones Page

- Account Page

- View Milestone Page

- Growth Chart

- Register

- Login

### Mockups

https://www.figma.com/file/OtjqwodUUBtHEIitUdpbPk/capstone?type=design&node-id=0-1&mode=design&t=TTgmDweFSEBT6Ime-0

### Data

Json file for now

### Endpoints

**POST /api/milestones**

- Add a new milestone entry with a photo.

Parameters:

- title: Milestone title
- date: Date of milestone
- description: Description of the milestone
- location: Location details
- photo: Photo of the milestone (upload)
- people: who is in the photo.
- token to post data
- user Id

Response:

```



{

"id": 1,

"title": "First Smile",

"date":  "2024-03-10",,

"description":  "Baby's first smile captured on camera!",

"location":  "Home",

"photoUrl":  "https://example.com/photo123.jpg"

},

...



```

**GET /api/milestones**

- Retrieve all milestone entries.

Parameters:

- id: user id

- token : JWT used to get data

Response:

```


[
{

"id": 1,

"title": "First Smile",

"date":  "2024-03-10",,

"description":  "Baby's first smile captured on camera!",

"location":  "Home",

"photoUrl":  "https://example.com/photo123.jpg"

},
]
...



```

**POST /users/register**

- Add a user account

Parameters:

- email: User's email

- password: User's provided password

Response:

```

{

"token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."

}

```

**POST /users/login**

- Login a user

Parameters:

- email: User's email

- password: User's provided password

Response:

```

{

"token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."

}

```

### Auth

- JWT auth

- Before adding auth, all API requests will be using a fake user with id 1

- Added after core features have first been implemented

- Store JWT in localStorage, remove when a user logs out

- Add states for logged in showing different UI in places listed in mockups

## Roadmap

- Create client

- react project with routes and boilerplate pages

- Create server

- express project with routing, with placeholder 200 responses

- Create JSON with simples data

## Nice-to-haves

- Integrate Google Places / Maps

- Forgot password functionality .

- Integration with social media platforms for easy sharing.

- More photos for each millstone.

- Update and delete growth chart .

- Reminder system for upcoming milestones.
