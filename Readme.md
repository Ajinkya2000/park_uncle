### Deployed Link - [Uncle Park](https://uncle-park-sushant-02.vercel.app/)
<hr/>

## Project: Uncle Park (Team - Appsilium)
**Description**: Uncle Park aims to solve the problem of parking in the modern days. Due to lack of sufficient amount of proper parking places and the fear of getting their cars/bikes towed the owner park their vehicles at places, which sometimes cause traffic jam (due to narrowing of the road, as the vehicle takes half the space), sometimes this also causes harm and someone rouge might intentionally cause damage to the vehicle.

**Solution**: Consider that a person (Mr. A) has some place in his veranda or gallery, he might lend this space to people who are unable to find the parking spot in that locality. Apart from this if someone(Mr. B) is going out of town (via train, flight), they want to keep their vehicles safe from harm. So in this case Mr. A can lend his space to the Mr. B. 

Other Benefits include: Source of Passive Income.

**What we made**: We created an application, where a user can find as well as add parking spots prefarable to their location.


## Features
- User Authentication using JWTs.
- Developed with modern Libraries and Framework (React, Redux, Express and Node - MERN)
- Successful integration of MapBox for Map View of different parking spots.
- Email Confirmation after booking a spot.
- Responsive Design

## Project Setup for development
- Create a `.env` file in the root directory of both the client and the server and populate the variables:
Client
```
  REACT_APP_MAPBOX_ACCESS_TOKEN=<your-mapbox-key>
```
Server
```
  MONGO_URI=<mongo-db-connection-uri>
  JWT_SECRET=<your-jwt-secret-key>
```

- Create a new terminal session, then run the following command:
```console 
cd server/
npm install
npm run dev
```

- Create another terminal session, then run:
```console
cd client/
npm install
npm start
```
