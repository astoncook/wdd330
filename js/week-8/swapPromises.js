let nextURL = "https://swapi.dev/api/people";
let previousURL = null;

function fetchPeople(url = nextURL) {
    fetch(url).then(response => response.json()).then(json => {
        createNavigation(json["count"], json["previous"], json["next"]);
        return displayPeople(json["results"]);
    });
}
// Display the list of people by fetchPeople.
function displayPeople(peopleList) {
    document.getElementById("descriptionDiv").innerHTML = "";
    document.getElementById("descriptionDiv").classList = 'people';
    for (const i in peopleList)
    {
        const person = peopleList[i];
        const personDisplayElement = document.createElement("p");
        personDisplayElement.innerHTML = person["name"];
        document.getElementById("descriptionDiv").appendChild(personDisplayElement);

        personDisplayElement.addEventListener('click', () => {
            // Display modal with data from person
            document.getElementById("showModal").style.display = "block";
            document.getElementById("modalDetails").innerHTML = person['name'] +
                "\n" + "<br>"
                 + "Height: " + person['height'] + "<br>"
                 + "Mass: " + person['mass'] + '<br>'
                 + "Hair color: " + person['hair_color'] + '<br>'
                 + "Skin tone: " + person['skin_color'] + '<br>'
                 + "Eye color: " + person['eye_color'];
                 //Close the information when the X is clicked
                 document.getElementsByClassName("close")[0].onclick = function () {
                     document.getElementById("showModal").style.display = "none";

                     
                 }
        });

        personDisplayElement.classList.add('pagination');
        personDisplayElement.classList.add('person');
        document.getElementById("descriptionDiv").appendChild(personDisplayElement);
    }
}

function createNavigation(_numOfPeople, _prevUrl, _nextUrl) {
    buttonContainer = document.querySelector('.buttons');
    buttonContainer.innerHTML = "";
    previousButton = document.createElement('button');
    previousButton.setAttribute('id', 'previous');
    previousButton.addEventListener('click', function() { fetchPeople(_prevUrl) });
    !_prevUrl ? previousButton.setAttribute('disabled', "TRUE") : null;
    previousButton.innerHTML = "&#8249;";
    buttonContainer.appendChild(previousButton);
    numPages = _numOfPeople % 10 == 0 ? (parseInt(_numOfPeople) / 10) : (parseInt(_numOfPeople / 10) + 1);
    for (let x = 1; x <= numPages; x++) {
        pageButton = document.createElement('button');
        pageButton.addEventListener('click', () => {
            console.log(`Value of y: ${x}`);
            return fetchPeople("http://swapi.dev/api/people/?page=" + x);
        });
        pageButton.textContent = x;
        pageButton.classList.add('pageIndex');
        buttonContainer.appendChild(pageButton);
    }
    nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'next');
    nextButton.addEventListener('click', () => { fetchPeople(_nextUrl) });
    !_nextUrl ? nextButton.setAttribute('disabled', "TRUE") : null;
    nextButton.innerHTML = "&#8250;";
    buttonContainer.appendChild(nextButton);
}