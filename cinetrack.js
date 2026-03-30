/* DREAM APPLICATION: CineTrack
   A tool for media lovers to track, rate, and organize their watchlists.
*/

// --- 1. MODULE: VALUES, DATA TYPES, AND OPERATIONS ---
/* PSEUDOCODE: 
   Initialize the application by setting the app name and user stats. 
   Use numerical operations to calculate an average score from two different sources.
*/
let appName = "CineTrack"; // String
let criticRating = 8.5;    // Number
let userRating = 9.0;      // Number
let averageScore = (criticRating + userRating) / 2; // Skill: Numerical Operation

console.log("--- Welcome to " + appName + " ---");
console.log("Initial Average Score: " + averageScore);


// --- 2. MODULE: STRINGING CHARACTERS TOGETHER ---
/* PSEUDOCODE: 
   Clean up a user's raw text input by removing whitespace and correcting the casing
   to ensure it looks professional in the UI.
*/
let rawInput = "   interstellar   ";
// Skill: String Methods (.trim, .toLowerCase, .toUpperCase, .slice)
let cleanTitle = rawInput.trim().toLowerCase(); 
let displayTitle = cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1);

console.log("Formatted Movie Title: " + displayTitle);


// --- 3. MODULE: CONTROL STRUCTURES AND LOGIC ---
/* PSEUDOCODE: 
   Evaluate if a movie meets specific criteria (rating and length) to determine 
   if it should be recommended to the user right now.
*/
let movieLengthMinutes = 169;
let isHighlyRated = averageScore >= 8.0;

// Skill: Comparison and Logical Operators (&&)
if (isHighlyRated && movieLengthMinutes > 150) {
    console.log("Recommendation: This is a 'Weekend Epic' - Grab some popcorn!");
} else if (isHighlyRated) {
    console.log("Recommendation: A perfect 'Must-Watch' for tonight.");
} else {
    console.log("Recommendation: Keep searching for a better match.");
}


// --- 4. MODULE: BUILDING ARRAYS ---
/* PSEUDOCODE: 
   Create a collection (array) to store multiple movie titles that the user 
   has added to their personal watchlist.
*/
// Skill: Array Initialization
let watchList = ["The Matrix", "Parasite", "Inception"];

console.log("Current Watchlist:", watchList);


// --- 5. MODULE: USING ARRAYS ---
/* PSEUDOCODE: 
   Add the newly formatted movie to the existing collection and use built-in 
   methods to keep the list organized for the user.
*/
watchList.push(displayTitle); // Skill: Array Method (.push)
watchList.sort();             // Skill: Array Method (.sort)

console.log("Updated & Sorted Watchlist:", watchList);
console.log("Total Count: " + watchList.length);


// --- 6. MODULE: CREATING AND USING OBJECTS ---
/* PSEUDOCODE: 
   Create a complex data structure (object) to hold all details for a single movie. 
   Update a specific property to show the movie has been watched.
*/
// Skill: Object Creation and Property Access
let movieProfile = {
    title: "Interstellar",
    director: "Christopher Nolan",
    releaseYear: 2014,
    isWatched: false
};

// Skill: Modifying Object Properties
movieProfile.isWatched = true; 

console.log("Viewing Profile: " + movieProfile.title);
console.log("Watch Status: " + (movieProfile.isWatched ? "Finished" : "Pending"));