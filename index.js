console.log('This is Poject 5');

const myArr = [{
    name: 'Rohan Das',
    Age: 21,
    city: 'Delhi',
    Language: 'Python',
    FrameWork: 'Django',
    image: 'https://randomuser.me/api/portraits/men/51.jpg'
},

{
    name: 'Mayank Aggarwal',
    Age: 18,
    city: 'Gurgaon',
    Language: 'JavaScript',
    FrameWork: 'Angular',
    image: 'https://randomuser.me/api/portraits/men/52.jpg'
},

{
    name: 'Harshit',
    Age: 20,
    city: 'Mumbai',
    Language: 'C++',
    FrameWork: 'No framework',
    image: 'https://randomuser.me/api/portraits/men/54.jpg'
},

{
    name: 'Himanshu',
    Age: 24,
    city: 'Bangalore',
    Language: 'Java',
    FrameWork: 'React',
    image: 'https://randomuser.me/api/portraits/men/59.jpg'
},

{
    name: 'Mehak',
    Age: 17,
    city: 'DLF',
    Language: 'HTML',
    FrameWork: 'CSS',
    image: 'https://randomuser.me/api/portraits/women/51.jpg'
}]

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: true } : { done: false }
        }
    }
}
//     let nextIndex = 0;
//     return {
//         next: function () {
//             return () => {
//                 if (nextIndex < profiles.length) {
//                     {
//                         value = profiles[nextIndex++],
//                             done = false
//                     }
//                 } else {
//                     { done = true }
//                 }
//             }
//         }
//     }
// }


let candidates = cvIterator(myArr);

nextCV();

let next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    let currentCandidate = candidates.next().value;
    console.log(currentCandidate);
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.Age}</li>
    <li class="list-group-item">City: ${currentCandidate.city}</li>
    <li class="list-group-item">Language: ${currentCandidate.Language}</li>
    <li class="list-group-item">Framework: ${currentCandidate.FrameWork}</li>
`} else {
       // window.location.reload();
        //console.log(confirm('Do you want to start it from starting'));
    if(confirm('Do you want to start it from starting')==true){
        window.location.reload();
    }

    }
}