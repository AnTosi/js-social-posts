//e ora viene il bello
//devo stampare una lista di post partendo da un array di oggetti

//attributi:
//id
//contenuto
//immagine
//autore (nome ed avatar)
//data creazione

//secondo array solo id dei post a cui abbiamo dato like

let postList = [
    {
        "post_id": 0,
        "contenuto": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis suscipit repellendus vitae!",
        "immagine": "https://i.picsum.photos/id/726/450/230.jpg?hmac=oUuekS6Ztvm9rPNulsQJX__Mv6o0MWsSJlgc7p_Ias0",
        "autore": ["Zack Canasta", "https://i.picsum.photos/id/518/50/50.jpg?hmac=NSJ8qtVF-xr09AM3P7psapk3GJSe_8ZakwMlrUInNm0"],
        "likesN": 31,
        "date": "11/05/2021"
    },

    {
        "post_id": 0,
        "contenuto": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nam unde itaque reprehenderit dolorum ex perferendis.6",
        "immagine": "https://i.picsum.photos/id/91/450/230.jpg?hmac=3-Dod75DvwRAgITysdnHiuxBQvgjOm1FdvsfF5gLcC8",
        "autore": ["Bruno Liegi-Bastogne-Liegi", "https://i.picsum.photos/id/274/50/50.jpg?hmac=wd1V_89I-BBmuYYXuHgJujEmwilyBN6LcQ8EkR--umM"],
        "likesN": 18,
        "date": "23/04/2021"

    },

    {
        "post_id": 0,
        "contenuto": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad.",
        "immagine": "https://i.picsum.photos/id/1021/450/230.jpg?hmac=CubCGyWGZFi6NQ2DkgSOa8RtYOKy2XXbLIoC59fPjcM",
        "autore": ["Riccardino Fuffolo", ""],
        "likesN": 22,
        "date": "21/01/2020"

    },

    {
        "post_id": 0,
        "contenuto": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dignissimos voluptate magnam ipsa accusantium deserunt autem fugit ad vero.",
        "immagine": "https://i.picsum.photos/id/664/450/230.jpg?hmac=EUFJyOUOG81Z1E8u2Aj6Qw3IqB8Y6nhF21fhbwQjazE",
        "autore": ["Amalia Frellioje", "https://i.picsum.photos/id/30/50/50.jpg?hmac=NwG4W4vHtEenBxNv1J4l62VoTpxnoLu8PXAGf1bdGa0"],
        "likesN": 44,
        "date": "24/10/2021"

    },
]

let likedPost = ["1", "3"];

console.log(postList[1].autore[1]);
//creato l'array con ci?? che chiedeva



//ora faccio ciclo for per stampare i post, prendendolo chiaramente da quello che ho fatto in HTML
//metto l'HTML in una const per lasciare il ciclo un po' pi?? pulito


//adatto HTML con le propriet?? dell'array, prima per il primo post, se funziona lo metto nel ciclo (al momento tralascio contatore, bonus, event listener per il like etc)

// niente, devo mettere il post dentro al ciclo senn?? ho problemi a definire i
// let postHTML = `
// <div class="post container bg-white p-3 my-2">
// <div class="head d-flex">
// <div class="pro_pic col_2 text-center">
//     <img src="${postList[i].autore[1]}" alt="">
// </div>

// <div class="user_name px-3 py-2 col-10">
//     <p class="name my-0">${postList[i].autore[0]}</p>
//     <p class="date my-0">${postList[i].date}</p>
// </div>

// </div>
// <p class= "post_text mt-3">
// ${postList[i].contenuto}
// </p>

// <div class="post_pic text-center">
// <img src="${postList[i].immagine}">
// </div>

// <div class="likes d-flex py-3">
// <div class="like col-6 text-center">
//     <i class="fas fa-thumbs-up"></i> Mi piace
// </div>
// <div class= "like_numb col-6 text-center">
//     Piace a <span class="bold">80</span> persone
// </div>
// </div>
// </div>`;

// console.log(post);

// document.getElementById("post_list").innerHTML = post;



//questo ?? il ciclo for semplice semplice, dovrebbe fare tutto quanto fatto per il singolo post ma per tutti
for (let i = 0; i < postList.length; i++) {
    let post_id = i;
    postList[i].post_id = i;
    // console.log(id);
    // console.log([postList[i].post_id] = i);
    let post= `
        <div class="post container bg-white p-3 my-2">
            <div class="head d-flex">
                <div class="pro_pic col_2 text-center">
                    <img src="${postList[i].autore[1]}" alt="">
                </div>

                <div class="user_name px-3 py-2 col-10">
                    <p class="name my-0">${postList[i].autore[0]}</p>
                    <p class="date my-0">${postList[i].date}</p>
                </div>
            </div>

            <p class= "post_text mt-3">
            ${postList[i].contenuto}
            </p>

            <div class="post_pic text-center">
                <img src="${postList[i].immagine}">
            </div>

            <div class="likes d-flex py-3">
                <div class="like col-6 text-center">
                    <button id="like${i}" class="" datapost-id="${post_id}">
                        <i class="fas fa-thumbs-up"></i> Mi piace
                    </button>                    
                </div>
                <div class= "like_numb col-6 text-center">
                    Piace a <span id="likesNumber + ${post_id}" class="bold">${postList[i].likesN}</span> persone
                </div>
            </div>
        </div>`;
        document.getElementById("post_list").innerHTML += " " + post;
        console.log(post_id);
        console.log(likedPost);
        if (likedPost.includes(`${post_id}`)) {
            document.getElementById(`like${i}`).classList.add("liked");
        } else continue


        //questo eventlistener non compare e non fa nulla, non capisco dove sbaglio
        //provo a semplificarlo e a fargli solo aggiungere liked
        //niente, ci rinuncio, niente bonus
        document.getElementById(`like${i}`).addEventListener("click", function () {
            console.log(document.getElementById(`like${i}`).classList);

            // if (getElementById(`like${i}`).classList.contains("liked"))  {
            //     return;
            // } else {getElementById(`like${i}`).classList.add("liked");

            // }
        
            getElementById(`like${i}`).classList.add("liked");
            // const postID = this.getAttribute(`datapost-id`);
            // const likeCounter = document.getElementById(`"likesNumber" + post_ID`);
            // likeCounter.innerHTML = parseInt(likeCounter) + 1;
        });


}



// const likeToggle = document.getElementsByClassName("like");
// for (let i = 0; i < likedPost.length; i++) {
//     const element = likedPost[i];
//     this.addEventListener("click", pressLike)  
// }


//questa funzione semplicemente non va, non capisco perch??, non mi d?? neanche nessun feedback la console
//la metto direttamente nell'event listener anche se dovrebbe funzionare lo stesso
function pressLike() {
    if (getElementById(`like${i}`).classList.contains("liked"))  {
        return;
    }

    getElementById(`like${i}`).classList.add("liked");
    const postID = this.getAttribute(`datapost-id`);
    const likeCounter = document.getElementById(`"likesNumber" + post_ID`);
    likeCounter.innerHTML = parseInt(likeCounter) + 1;
}
