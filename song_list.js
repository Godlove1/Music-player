//song list
let All_song = [
   {
     name: "Moonlight",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "XXXTENTACION"
   },
   {
     name: "LUV",
     path: "music/2.mp3",
     img: "images/30.jpg",
     singer: "Tory Lanez"
   },
   {
     name: "Mask Off",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "Future"
   },
   {
     name: "Panda",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "Desiigner"
   },
   {
     name: "Meet The Woo",
     path: "music/5.mp3",
     img: "images/27.jpg",
     singer: "Pop Smoke"
   },
   {
    name: "Kesha & Becky(RMX)",
    path: "music/6.mp3",
    img: "images/au.jfif",
    singer: "Russ FT Tion Wayne"
  },
    {
     name: "Sanguine Paradise",
     path: "music/7.mp3",
     img: "images/au.jfif",
     singer: "Lil Uzivert"
  },
     {
     name: "Bella",
     path: "music/8.mp3",
     img: "images/au.jfif",
     singer: "MHD ft Wizkid"
  },
      {
     name: "Dab",
     path: "music/9.mp3",
     img: "images/22.jpg",
     singer: "Migos"
  },
       {
          name: "Versace(RMX)",
     path: "music/10.mp3",
     img: "images/22.jpg",
     singer: "Migos ft Drake"
  },
        {
     name: "Jowo",
     path: "music/11.mp3",
     img: "images/11.jpg",
     singer: "Davido"
  },
         {
     name: "Let IT Go",
     path: "music/12.mp3",
     img: "images/12.jpg",
     singer: "Dj Khaled,JB & 21"
  },
          {
     name: "Laugh now cry later",
     path: "music/13.mp3",
     img: "images/23.jpg",
     singer: "Drake"
  },
           {
     name: "Kak-Kak",
     path: "music/14.mp3",
     img: "images/au.jfif",
     singer: "Fhish"
  },
            {
     name: "Peaches",
     path: "music/15.mp3",
     img: "images/au.jfif",
     singer: "Justin Bieber"
  },
             {
     name: "LIE",
     path: "music/16.mp3",
     img: "images/16.jpg",
     singer: "Kizz Daniel"
  },
              {
     name: "Balance",
     path: "music/17.mp3",
     img: "images/18.jpg",
     singer: "KO-c Ft Tenor"
   },
    {
     name: "Sango",
     path: "music/18.mp3",
     img: "images/18.jpg",
     singer: "KO-c FT Fanicko"
  },
     {
     name: "Zoo York",
     path: "music/19.mp3",
     img: "images/au.jfif",
     singer: "Lil Tjay"
  },
      {
     name: "Memories",
     path: "music/20.mp3",
     img: "images/au.jfif",
     singer: "Maroon 5"
  },
       {
     name: "Obanje",
     path: "music/21.mp3",
     img: "images/au.jfif",
     singer: "Mic Monsta"
  },
        {
     name: "Taco Tueday",
     path: "music/22.mp3",
     img: "images/22.jpg",
     singer: "Migos"
  },
         {
     name: "laugh",
     path: "music/23.mp3",
     img: "images/23.jpg",
     singer: "Drake"
  },
          {
     name: "Jungle",
     path: "music/24.mp3",
     img: "images/au.jfif",
     singer: "Nasty C"
   },
    {
     name: "THey Dont",
     path: "music/25.mp3",
     img: "images/au.jfif",
     singer: "Nasty C"
  },
     {
     name: "AP",
     path: "music/26.mp3",
     img: "images/27.jpg",
     singer: "POP Smoke"
  },
      {
     name: "Foreigner(RMX)",
     path: "music/27.mp3",
     img: "images/27.jpg",
     singer: "Pop Smoke ft TYga"
  },
       {
     name: "TVLH(RMX)",
     path: "music/28.mp3",
     img: "images/28.jpg",
     singer: "STanly Enow"
  },
        {
     name: "I Dunno",
     path: "music/29.mp3",
     img: "images/29.jpg",
     singer: "Tion Wayne Ft Dutchavelli"
  },
         {
     name: "Controlla",
     path: "music/30.mp3",
     img: "images/30.jpg",
     singer: "Tory Lanez"
   },
   
];
/*you can add more song & images from  computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-play" aria-hidden="true"></i></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/