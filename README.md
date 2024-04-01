


https://github.com/ghufran-adel/memory-lane-capstone/assets/101430061/48bcd893-3afa-4d9b-8bbc-bee516292b1b


# Project Title

MemoryLane

## Overview

MemoryLane is an app designed to help parents craft personalized memories of their child's early years. Users can document and celebrate key milestones, memorable moments, and developmental achievements in a convenient and user-friendly interface.

### Problem

Parents often struggle to capture and organize precious moments of their child's early years, leading to fragmented memories. MemoryLane addresses this by providing a streamlined solution for documenting and celebrating these milestones.

### User Profile

- Parents seeking a user-friendly tool to document and celebrate their baby's milestones. They want easy access and management of recorded milestones.

### Features

- As a user, I want to be able to create an account
- As a user, I want to be able to login to my account
- As a logged in user, I want to be able to record and track key developmental milestones with photo
- As a logged in user, attach location details to each milestone to capture where the milestone occurred
- As a logged in user, Sort and filter milestones by date, type, or location
- As a logged in user, I want to be able to delete or update milestones
- As a logged in user, I want to be able to add data to growth chart with visual representations

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
- View Growth Chart
- Register
- Login

### Mockups

[Figma Mockups](https://www.figma.com/file/OtjqwodUUBtHEIitUdpbPk/capstone?type=design&node-id=0-1&mode=design&t=TTgmDweFSEBT6Ime-0)

### Data

JSON file for now

### Endpoints

#### POST /api/milestones

Add a new milestone entry with a photo.

**Parameters:**
- title: Milestone title
- date: Date of milestone
- description: Description of the milestone
- location: Location details
- photo: Photo of the milestone (upload)
- people: Who is in the photo.
- token: JWT used to post data
- user Id

**Response:**
```json
{
  "id": 1,
  "title": "First Smile",
  "date": "2024-03-10",
  "description": "Baby's first smile captured on camera!",
  "location": "Home",
  "photoUrl": "https://example.com/photo123.jpg"
}
```

#### GET /api/milestones

Retrieve all milestone entries.

**Parameters:**
- id: User ID
- token: JWT used to get data

**Response:**
```json
[
  {
    "id": 1,
    "title": "First Smile",
    "date": "2024-03-10",
    "description": "Baby's first smile captured on camera!",
    "location": "Home",
    "photoUrl": "https://example.com/photo123.jpg"
  }
]
```

#### GET /api/milestones/:id

Retrieve a specific milestone entry for a user.

**Parameters:**
- id: ID of the milestone to retrieve
- token: JWT used to authenticate the user

**Response:**
```json
{
  "id": 1,
  "title": "First Smile",
  "date": "2024-03-10",
  "description": "Baby's first smile captured on camera!",
  "location": "Home",
  "photoUrl": "https://example.com/photo123.jpg"
}
```

#### PATCH /api/milestones/:id

Update an existing milestone entry.

**Parameters:**
- id: ID of the milestone to update
- title (optional): New title for the milestone
- date (optional): New date for the milestone
- description (optional): New description for the milestone
- location (optional): New location details for the milestone
- photo (optional): New photo URL for the milestone
- people (optional): New list of people associated with the milestone
- token: JWT used to authenticate the user

**Response:**
```json
{
  "success": true,
  "message": "Milestone updated successfully."
}
```

#### DELETE /api/milestones/:id

Delete a milestone entry.

**Parameters:**
- id: ID of the milestone to delete
- token: JWT used to authenticate the user

**Response:**
```json
{
  "success": true,
  "message": "Milestone deleted successfully."
}
```

#### GET /api/growth

Retrieve all growth entries for a user.

**Parameters:**
- token: JWT used to authenticate the user

**Response:**
```json
[
  {
    "date": "2024-01-01",
    "height": 60,
    "weight": 12,
    "headCircumference": 40
  },
  {
    "date": "2024-02-01",
    "height": 61,
    "weight": 13,
    "headCircumference": 41
  }
]
```

#### POST /api/growth

Add a new growth entry for a user.

**Parameters:**
- date: Date of the growth entry
- height: Height measurement
- weight: Weight measurement
- headCircumference: Head circumference measurement
- token: JWT used to authenticate the user

**Response:**
```json
{
  "success": true,
  "message": "Growth entry added successfully."
}
```

#### POST /users/register

Add a user account.

**Parameters:**
- email: User's email
- password: User's provided password

**Response:**
```json
{
  "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ

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

- Add categories for millstones .

- Reminder system for upcoming milestones.
