<template>
  <div id="app">
    <transition name="test" enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css");
@import './sass/style.scss';


img {
  width: 100%;
  height: auto;
}

/* link colours */
a {
  color: #000;
  border-bottom: 5px solid pink;
  text-decoration: none;
}

.arrows {
  float: right;
  color: red;
  border-bottom: 5px solid pink;
  text-decoration: none;
}

.arrows:hover {
  float: right;
  color: maroon;
  border-bottom: 5px solid pink;
  text-decoration: none;
}

/* in general usage */

hr {
 background-image: linear-gradient(to right, pink , yellow);
 border: none;
 height:5px;
 }

/* media queries */
/*
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {

  //CSS
  #app {
      font-family: "CircularStd-Book", sans-serif;
      margin: auto;
      width: 65%;
      padding: 10px;
      font-size: 2.5vw;
  }

  .title {
    font-family: "spacemono-ital", monospace;
    font-size: 3.5vw;
    line-height: 2.5vw;
  }

  .subtitle {
    font-family: "spacemono-ital", monospace;
    font-size: 2.5vw;
  }

}

/*
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {

  //CSS
  #app {
      font-family: "CircularStd-Book", sans-serif;
      margin: auto;
      width: 70%;
      padding: 10px;
      font-size: 2.5vw;
  }

  .title {
    font-family: "spacemono-ital", monospace;
    font-size: 3.5vw;
    line-height: 2.5vw;
  }

  .subtitle {
    font-family: "spacemono-ital", monospace;
    font-size: 2.5vw;
  }

}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {

  //CSS
  #app {
      font-family: "CircularStd-Book", sans-serif;
      margin: auto;
      width: 80%;
      padding: 10px;
      font-size: 3vw;
  }

  .title {
    font-family: "spacemono-ital", monospace;
    font-size: 4.5vw;
    line-height: 3vw;
  }

  .subtitle {
    font-family: "spacemono-ital", monospace;
    font-size: 3.5vw;
  }

}

/*
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

  //CSS
  #app {
      font-family: "CircularStd-Book", sans-serif;
      margin: auto;
      width: 80%;
      padding: 10px;
      font-size: 3vw;
  }

    .title {
      font-family: "spacemono-ital", monospace;
      font-size: 4.5vw;
      line-height: 3vw;
    }

    .subtitle {
      font-family: "spacemono-ital", monospace;
      font-size: 3.5vw;
    }
}

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {

  #app {
      font-family: "CircularStd-Book", sans-serif;
      margin: auto;
      width: 95%;
      padding: 10px;
      font-size: 3.2vw;
  }


    .title {
      font-family: "spacemono-ital", monospace;
      font-size: 5vw;
      line-height: 4vw;
    }

    .subtitle {
      font-family: "spacemono-ital", monospace;
      font-size: 4vw;
    }

}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {

  #app {
      font-family: "CircularStd-Book", sans-serif;
      margin: auto;
      width: 95%;
      padding: 10px;
      font-size: 4vw;
  }


    .title {
      font-family: "spacemono-ital", monospace;
      font-size: 6vw;
      line-height: 4vw;
    }

    .subtitle {
      font-family: "spacemono-ital", monospace;
      font-size: 4.5vw;
    }

}

</style>
