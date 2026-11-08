const rowLength = 4;

const categories = []

const photos = []

categories.push({
    id: 'philmont',
    name: 'Philmont',
    description: 'very long walk in middle of nowhere'
})
for (let i = 1; i < 10; i++) {
    let photo = {
        src: 'assets/images/photography/philmont/1/' + i + ".jpg",
        category: 'philmont'
    }
    photos.push(photo);
}
for (let i = 1; i < 10; i++) {
    let photo = {
        src: 'assets/images/photography/philmont/2/' + i + ".jpg",
        category: 'philmont'
    }
    photos.push(photo);
}

categories.push({
    id: 'robotics',
    name: 'Robotics',
    description: 'Beep boop'
})
for (let i = 1; i < 10; i++) {
    let photo = {
        src: 'assets/images/photography/robotics/' + i + ".jpg",
        category: 'robotics'
    }
    photos.push(photo);
}

categories.push({
    id: 'stars',
    name: 'Stars',
    description: 'Emerson Scout Camp'
})
for (let i = 1; i < 4; i++) {
    let photo = {
        src: 'assets/images/photography/stars/' + i + ".jpg",
        category: 'stars'
    }
    photos.push(photo);
}

categories.push({
    id: 'rockymountains',
    name: 'Rocky Mountains',
    description: 'Snowy big rocks'
})
for (let i = 1; i < 10; i++) {
    let photo = {
        src: 'assets/images/photography/rockymountains/' + i + ".png",
        category: 'rockymountains'
    }
    photos.push(photo);
}

categories.push({
    id: 'seals',
    name: 'Seals',
    description: 'Ceilings somewhere in Monterey'
})
for (let i = 1; i < 4; i++) {
    let photo = {
        src: 'assets/images/photography/seals/' + i + ".jpg",
        category: 'seals'
    }
    photos.push(photo);
}

categories.push({
    id: 'arches',
    name: 'Arches',
    description: 'Rock with hole'
})
for (let i = 1; i < 10; i++) {
    let photo = {
        src: 'assets/images/photography/arches/' + i + ".png",
        category: 'arches'
    }
    photos.push(photo);
}

let html = "";

for (let i = 0; i < categories.length; i++) {
    let categoryHtml = "<p class='gallerySectionHeading'>" + categories[i].name + "</p>";
    if (categories[i].description != "") {
        categoryHtml += "<p class='gallerySectionDescription'> " + categories[i].description + "</p>";
    }
    categoryHtml += '<table>';
    let photosInRow = 0;

    for (let j = 0; j < photos.length; j++) {
        if (photos[j].category == categories[i].id) {
            if (photosInRow == 0) {
                categoryHtml += "<tr>"
            }
            categoryHtml += "<td><div class='galleryPhotoCard'> <img class='galleryPhoto' src='" + photos[j].src + "' /> </div>";
            
            categoryHtml += "</td>";
            photosInRow++;
            if (photosInRow == rowLength - 1) {
                photosInRow = 0;
                categoryHtml += "</tr>"
            }
        }
    }
    html += categoryHtml + "</table>";
}


document.getElementsByClassName("galleryDiv")[0].innerHTML = html;