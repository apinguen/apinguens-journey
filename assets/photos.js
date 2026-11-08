const rowLength = 4;

const categories = [
    {
        id: 'philmont',
        name: 'Philmont',
        description: 'Philmont Scout Ranch, Cimarron, NM',
        coverPhoto: ''
    },
    {
        id: 'robotics',
        name: 'Robotics',
        description: 'Beep boop',
        coverPhoto: ''
    },

]

const photos = [
    {
        src: 'assets/images/photography/philmont/1/1.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/1/2.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/1/3.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/1/4.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/1/5.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/1/6.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
     {
        src: 'assets/images/photography/philmont/1/7.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/1/8.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/1/9.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/1/10.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/2/1.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/2/2.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
     {
        src: 'assets/images/photography/philmont/2/3.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/2/4.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/2/5.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/2/6.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/2/7.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/2/8.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/2/9.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/philmont/2/10.jpg',
        alt: '',
        caption: '',
        category: 'philmont'
    },
    {
        src: 'assets/images/photography/robotics/1.jpg',
        alt: '',
        caption: '',
        category: 'robotics'
    },
    {
        src: 'assets/images/photography/robotics/2.jpg',
        alt: '',
        caption: '',
        category: 'robotics'
    },
    {
        src: 'assets/images/photography/robotics/3.jpg',
        alt: '',
        caption: '',
        category: 'robotics'
    },
    {
        src: 'assets/images/photography/robotics/4.jpg',
        alt: '',
        caption: '',
        category: 'robotics'
    },
    {
        src: 'assets/images/photography/robotics/5.jpg',
        alt: '',
        caption: '',
        category: 'robotics'
    },
    {
        src: 'assets/images/photography/robotics/6.jpg',
        alt: '',
        caption: '',
        category: 'robotics'
    },
    {
        src: 'assets/images/photography/robotics/7.jpg',
        alt: '',
        caption: '',
        category: 'robotics'
    },
    {
        src: 'assets/images/photography/robotics/8.jpg',
        alt: '',
        caption: '',
        category: 'robotics'
    },
    {
        src: 'assets/images/photography/robotics/9.jpg',
        alt: '',
        caption: '',
        category: 'robotics'
    },
    
]

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
            if (photos[j].caption != "") {
                categoryHtml += "<div class='galleryPhotoCaption'><p>" + photos[j].caption + "</p></div>";
            }
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