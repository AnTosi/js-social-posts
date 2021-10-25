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
        "id": 0,
        "contenuto": "lorem12",
        "immagine": "https://i.picsum.photos/id/726/450/230.jpg?hmac=oUuekS6Ztvm9rPNulsQJX__Mv6o0MWsSJlgc7p_Ias0",
        "autore": ["Zack Canasta", "https://i.picsum.photos/id/518/50/50.jpg?hmac=NSJ8qtVF-xr09AM3P7psapk3GJSe_8ZakwMlrUInNm0"],
        "likesN": 0,
        "date": "11/05/2021"
    },

    {
        "id": 0,
        "contenuto": "lorem16",
        "immagine": "https://i.picsum.photos/id/571/450/230.jpg?hmac=ks_cxdfFf-7kYe5tKp44iaEqbpVk-8RBt2UdNm8ph7k0",
        "autore": ["Bruno Liegi-Bastogne-Liegi", "https://i.picsum.photos/id/274/50/50.jpg?hmac=wd1V_89I-BBmuYYXuHgJujEmwilyBN6LcQ8EkR--umM"],
        "likesN": 0,
        "date": "23/04/2021"

    },

    {
        "id": 0,
        "contenuto": "lorem9",
        "immagine": "https://i.picsum.photos/id/1021/450/230.jpg?hmac=CubCGyWGZFi6NQ2DkgSOa8RtYOKy2XXbLIoC59fPjcM",
        "autore": ["Riccardino Fuffolo", ""],
        "likesN": 0,
        "date": "21/01/2020"

    },

    {
        "id": 0,
        "contenuto": "lorem19",
        "immagine": "https://i.picsum.photos/id/664/450/230.jpg?hmac=EUFJyOUOG81Z1E8u2Aj6Qw3IqB8Y6nhF21fhbwQjazE",
        "autore": ["Amalia Frellioje", "https://i.picsum.photos/id/30/50/50.jpg?hmac=NwG4W4vHtEenBxNv1J4l62VoTpxnoLu8PXAGf1bdGa0"],
        "likesN": 0,
        "date": "24/10/2021"

    },
]
console.log(postList[1].autore[1]);
//creato l'array con ciò che chiedeva



//ora faccio ciclo for per stampare i post, prendendolo chiaramente da quello che ho fatto in HTML
//metto l'HTML in una const per lasciare il ciclo un po' più pulito

let post = `<div class="head d-flex">
<div class="pro_pic col_2 text-center">
    <img src="${postList[0].autore[1]}" alt="">
</div>

<div class="user_name px-3 py-2 col-10">
    <p class="name my-0">${postList[0].autore[0]}</p>
    <p class="date my-0">${postList[0].date}</p>
</div>

</div>
<p class= "post_text mt-3">
${postList[0].contenuto}
</p>

<div class="post_pic text-center">
<img src="${postList[0].immagine}">
</div>

<div class="likes d-flex py-3">
<div class="like col-6 text-center">
    <i class="fas fa-thumbs-up"></i> Mi piace
</div>
<div class= "like_numb col-6 text-center">
    Piace a <span class="bold">80</span> persone
</div>
</div>`;

console.log(post);

document.querySelector(".post.container").innerHTML = post;




// for (let i = 0; i < postList.length; i++) {
//     const post = postList[i];
//     document.querySelector(".post.container").innerHTML += post;
// }