# Sensat Take Home Test

Please find my submission, you can see under the section Development server, how to run the project.

With regards to development, I stuck to just using angular client to build the project out.

## Few points about the app
* For styling I used Bootstrap, it's perfect for something like this but I generally don't use it on large projects as you end up rewriting a lot of the styling along with not using half of what comes with it.
* The extra tasks I chose were the Median values and Map
* A router was used to go to the map page sending the longitude and latitude of the sensor. If given more time I would have sent the sensor id, then pulled the data from an ngrx store to display more useful information on that page.
* If given more time I would have used NGRX for managing the state of the sensors, this would make things a lot cleaner. Also would allow caching the calls a bit easier.
* I haven't written any specs for the app due to time constraints.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
