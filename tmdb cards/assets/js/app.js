var cl = console.log;

let MovieCard = [
  { 
    title: "Oppenheimer", 
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.", 
    rating: 8.4, 
    image: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg" 
  },
  { 
    title: "Barbie", 
    overview: "Barbie suffers a crisis that leads her to question her world and her existence.", 
    rating: 7.1, 
    image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" 
  },
  { 
    title: "Dune: Part Two", 
    overview: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.", 
    rating: 8.6, 
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" 
  },
  { 
    title: "The Batman", 
    overview: "Batman uncovers corruption in Gotham City that connects to his own family while facing the Riddler.", 
    rating: 7.9, 
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" 
  },
  { 
    title: "Avatar: The Way of Water", 
    overview: "Jake Sully lives with his newfound family on Pandora, but must protect them when an ancient threat returns.", 
    rating: 6.6, 
    image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" 
  },
  { 
    title: "John Wick: Chapter 4", 
    overview: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table.", 
    rating: 8.0, 
    image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" 
  },
  { 
    title: "Spider-Man: Across the Spider-Verse", 
    overview: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People protecting its existence.", 
    rating: 5.7, 
    image: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg" 
  },
  { 
    title: "Guardians of the Galaxy Vol. 3", 
    overview: "The Guardians embark on a mission to protect Rocket’s life while facing powerful new enemies.", 
    rating: 8.1, 
    image: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg" 
  },
  { 
    title: "Black Panther: Wakanda Forever", 
    overview: "The people of Wakanda fight to protect their home from intervening world powers after King T’Challa’s death.", 
    rating: 7.2, 
    image: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg" 
  },
  { 
    title: "Mission: Impossible – Dead Reckoning Part One", 
    overview: "Ethan Hunt and the IMF must track down a deadly weapon before it falls into the wrong hands.", 
    rating: 7.7, 
    image: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg" 
  },

  { 
    title: "Interstellar", 
    overview: "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", 
    rating: 8.6, 
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" 
  },
  { 
    title: "Inception", 
    overview: "A thief who enters the dreams of others to steal secrets is given a chance at redemption.", 
    rating: 8.8, 
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" 
  },
  { 
    title: "The Dark Knight", 
    overview: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.", 
    rating: 9.0, 
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" 
  },
  { 
    title: "Gladiator", 
    overview: "A betrayed Roman general seeks revenge against the corrupt emperor who murdered his family.", 
    rating: 8.5, 
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" 
  },
  { 
    title: "The Matrix", 
    overview: "A hacker discovers the truth about his world and his role in the war against its controllers.", 
    rating: 8.7, 
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" 
  },
  { 
    title: "The Lord of the Rings: The Fellowship of the Ring", 
    overview: "A meek Hobbit and his companions set out on a journey to destroy the One Ring.", 
    rating: 8.8, 
    image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" 
  },
  { 
    title: "The Lord of the Rings: The Two Towers", 
    overview: "The Fellowship is broken, but its members continue their quest against Sauron's forces.", 
    rating: 8.7, 
    image: "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg" 
  },
  { 
    title: "The Lord of the Rings: The Return of the King", 
    overview: "The final battle for Middle-earth begins as Frodo and Sam approach Mount Doom.", 
    rating: 9.0, 
    image: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg" 
  },
  { 
    title: "Joker", 
    overview: "Arthur Fleck, a failed comedian, descends into madness and becomes the Joker.", 
    rating: 8,
     image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" 
  }
];
cl(MovieCard)

const moviePostContainer = document.getElementById("moviePostContainer");



const setrating = (rating) =>{
    if(rating <= 7){
        return 'badge-warning'
    }else if(rating >= 5 && rating < 7){
        return 'badge-success'
    }else{
        return 'badge-danger'
    }

    
}

let result = "";

MovieCard.forEach(card => {
  result += ` <div class="col-md-4 mb-4">
                <div class="card">
                   <figure class="movieCard mb-0">
                     <img src="https://image.tmdb.org/t/p/w500/${card.image}" alt="${card.title}">
                    <!-- <figcaption>
                        
                    </figcaption> -->

                    <figcaption>
                        <div class="titleInfo">
                        <div class="row">
                            <div class="col-10">
                                <h2>${card.title}</h2>
                            </div>
                            <div class="col-2">
                                <h3><span class="badge ${setrating(card.rating)}">${card.rating}</span></h3>
                            </div>
                        </div>
                    </div>
                    
                    <div class="overview">
                        <h5>${card.title}</h5>
                        <p>${card.overview}</p>
                    </div>
                    </figcaption>
                   </figure>
                </div>
            </div>`

})

moviePostContainer.innerHTML = result;



