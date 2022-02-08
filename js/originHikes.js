class Hike {
    constructor(name, imgSrc, imgAlt, distance, difficulty, description, directions) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.distance = distance;
        this.difficulty = difficulty;
        this.description = description;
        this.directions = directions;
    }
    // This renders the screen
    html() {
        console.log("Rendering");
        const html = ` <h2>${this.name}</h2>
            <div class="image"><img src="${this.imgSrc}" alt="${this.imgAlt}"></div>
            <div>
                    <div>
                        <h3>Distance</h3>
                        <p>${this.distance}</p>
                    </div>
                    <div>
                        <h3>Difficulty</h3>
                        <p>${this.difficulty}</p>
                    </div>
            </div>`;
        return html;
    }
}
// Displays the information about the hikes
Array.prototype.show = function () {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    this.forEach(hike => {
        const item = document.createElement("li");
        item.innerHTML = hike.html();
        hikeListElement.appendChild(item);
    });
}
const hikeList = [
    new Hike(
        "Bechler Falls",
        "https://www.americansouthwest.net/wyoming/photographs700/cave-falls2.jpg",
        "Image of Bechler Falls",
        "3 miles",
        "Easy",
        "Beautiful short hike along the Bechler river to Bechler Falls",
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."),
    new Hike(
        "Teton Canyon",
        "https://cdn.jacksonholewy.net/images/content/14443_1131_Teton_Canyon_Alaska_Basin_Trail_Wyoming_lg.jpg",
        "Image of Canyon",
        "3 miles",
        "Easy",
        "Beautiful short (or long) hike through Teton Canyon.",
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    ),
    new Hike(
        "Denanda Falls",
        "https://adventureforecast.com/wp-content/uploads/2019/09/DSC_0701-1-1-1024x682.jpg",
        "Image of Denanda Falls",
        "7 miles",
        "Moderate",
        "Beautiful hike through Bechler meadows river to Denanda Falls",
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    )
];

const imgBasePath = "//byui-cit.github.io/cit261/examples/";
hikeList.show();