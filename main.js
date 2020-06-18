// Contributors: Chad Dabney, Sarah Richardson, Chase Patrick

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

function createHeadingElements(string) {

    const kataHeading = document.createElement('h3')
    kataHeading.append(string)
    parentElement.append(kataHeading)
}

const parentElement = document.querySelector('.main-list')



//Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)


createHeadingElements('KATA 13')

const kata13List = document.createElement('ul')

for (index = 0; index < sampleArray.length; index++) {

    let currentIndex = sampleArray[index]

    if (currentIndex % 2 === 0) {
        let liElement = document.createElement('li')
        parentElement.append(kata13List)
        kata13List.append(liElement)
        liElement.append(currentIndex)
    }
}


  //Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)

createHeadingElements('KATA 14')


const kata14List = document.createElement('ul')

for (index = 0; index < sampleArray.length; index++) {

    let currentIndex = sampleArray[index]

    if (currentIndex % 2 === 1) {
        let liElement = document.createElement('li')
        parentElement.append(kata14List)
        kata14List.append(liElement)
        liElement.append(currentIndex)
    }
}

