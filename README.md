# Speakly

Speakly is a web application for an online language learning platform where users can browse teachers, add favorites, and book trial lessons.

## Features

- User registration and login with Firebase Authentication
- Browse a list of language teachers
- Filter teachers by:
  - teaching language
  - student level
  - lesson price

- Add/remove teachers to favorites
- Persistent favorites after page refresh
- Detailed teacher information with reviews
- Booking a trial lesson via modal form
- Private Favorites page доступна лише для авторизованих користувачів
- Responsive modal windows with closing by:
  - close button
  - backdrop click
  - `Esc` key

## Pages

### Home

Landing page with company advantages and navigation to Teachers page.

### Teachers

Page with teacher cards, filtering, favorites, and booking functionality.

### Favorites

Private page where authorized users can view saved teachers.

## Technologies Used

- React
- Vite
- React Router DOM
- Firebase Authentication
- Firebase Realtime Database
- React Hook Form
- Yup Validation
- CSS Modules
- React Hot Toast
- React Icons

## Teacher Data Structure

Teachers are stored in Firebase Realtime Database with the following fields:

- `name`
- `surname`
- `languages`
- `levels`
- `rating`
- `reviews`
- `price_per_hour`
- `lessons_done`
- `avatar_url`
- `lesson_info`
- `conditions`
- `experience`

## Main Functionality

### Authentication

Users can:

- register
- log in
- log out
- persist authentication state

### Favorites

Authorized users can:

- add teachers to favorites
- remove teachers from favorites
- keep favorites after page refresh

Unauthorized users receive a notification when trying to use this feature.

### Booking Modal

Users can book a trial lesson using a form with validation.

All fields are required.

Validation is implemented using **React Hook Form + Yup**.

## Installation

Install dependencies:

```bash
npm install
```

Run the project locally:

```bash
npm run dev
```

## Repository

GitHub repository:
[Speakly](https://github.com/Petrovahel/Speakly)
