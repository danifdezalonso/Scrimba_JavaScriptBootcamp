// .indexOf() tells us the position of a element if doesn't exist we get a -1
// .includes() tells us whether a certain element exists in an array: (PRIMITEVE ELEMNTS)
// console.log(temperatures.includes(50));
// .some() checks whether one or more elements in an array meets a given condition: (OBJECT ELEMENTS)
// const result = temperatures.some(temperature => temperature.isRecordTemp); // resultado true si coincide false si no
// .every() tells us whether a condition is true for all the elements in an array:
// const result = temperatures.every(temperature => !temperature.isRecordTemp);

const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: false }, 
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
];

// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]

const hasWonGrammy = songs.some(song => song.wonGrammy);
console.log(hasWonGrammy);

const allMegaHits = songs.eve