<template>
  <div class="hello">
    <br><br>
    <span class="title">alexandria<br>alcancia<br>shaw</span><br><br>

    <truncate action-class="customClass" clamp="More Information" :length="99" less="" type="html" text='is a designer and developer in Montréal, Canada. She has a special interest in web and print design.<br><br> She graduated from Concordia University in 2019, with a specialization in <a href="https://www.concordia.ca/finearts/design/programs/undergraduate/computation-arts-bfa.html" target="_blank">Computation Arts</a> and a minor in Computer Science.<br><br> She currently works as a research assistant for <a href="https://alicejarry.com/" target="_blank">Alice Jarry.</a> <br><br>You can reach her at <a href="mailto:alex@alcanciashaw.com">alex at alcanciashaw.com</a>

    <br><br>See her <a href="http://alcanciashaw.com/AlcanciaShawResume.pdf" target="_blank">Résumé</a>, her <a href="https://www.instagram.com/alcanciashaw/" target="_blank">Instagram</a>, her <a href="https://github.com/alcanciashaw" target="_blank">Github</a>.'></truncate>

      <section class="works">
        <section class="col">

          <section>
            <br><br><br>
            <span class="subtitle">Selected work</span><br>
            <hr><br>
          </section>

          <section class="highlight">

          <section>
                <img src="@/assets/img/dcartp.png"><br><br>
                <span class="subtitle">DCART Labs</span>
                <router-link to="/dcart"><span class="arrows">View Process →</span></router-link>
                <br>Web design & Development · 2019<br><br>
          </section>

          <section>
                <img src="@/assets/img/alice2.png"><br><br>
                <span class="subtitle">Alice Jarry</span>
                <router-link to="/Alice"><span class="arrows">View Process →</span></router-link>
                <br>Graphic Design & Research · 2019<br><br>
          </section>

          <section>
                <img src="@/assets/img/alcanciashaw.png"><br><br>
                <span class="subtitle">alcanciashaw.com</span>
                <router-link to="/alcanciashaw"><span class="arrows">View Process →</span></router-link>
                <br>Web design & Development · 2019<br><br>
          </section>

          <section>
                <img src="@/assets/img/hiyas.jpg"><br><br>
                <span class="subtitle">Hiya Kerrii</span>
                <router-link to="/HiyaKerrii"><span class="arrows">View Process →</span></router-link>
                <br>Social Media Management · 2019<br><br>
          </section>

          <section>
                  <img src="@/assets/img/mel.png"><br><br>
                  <span class="subtitle">Melamina</span>
                  <router-link to="/Melamina"><span class="arrows">View Process →</span></router-link>
                  <br>Typeface & Print Book · 2018<br><br>
          </section>

          <section>
                  <img src="@/assets/img/iif.png"><br><br>
                  <span class="subtitle">IIF Timeline</span>
                  <router-link to="/Timeline"><span class="arrows">View Process →</span></router-link>
                  <br>Web Development · 2016<br><br>
          </section>


          <section>
                  <img src="@/assets/img/dij.png"><br><br>
                  <span class="subtitle">Dijkstra</span>
                  <router-link to="/Dijkstra"><span class="arrows">View Process →</span></router-link>
                  <br>Screenprinted booklet · 2016<br><br>
          </section>

          <section>
                  <img src="@/assets/img/bom.png"><br><br>
                  <span class="subtitle">BoM Squad</span>
                  <router-link to="/Bom"><span class="arrows">View Process →</span></router-link>
                  <br>UX & UI Design · 2015<br><br>
          </section>


        </section>

          <section>
            <br><br><br>
            <span class="subtitle">Links</span><br>
            <hr><br>
            <section class="col">
            <li><a href="http://alcanciashaw.com/AlcanciaShawResume.pdf">Résumé</a></li>
            <li><a href="https://www.instagram.com/alcanciashaw/">Instagram</a></li>
            <li><a href="https://github.com/alcanciashaw">Github</a></li>
            <li><a href="https://www.linkedin.com/in/alexandria-alcancia-shaw-7870ba100/">LinkedIn</a></li>
            </section>
          </section>


      </section>
    </section>

  </div>
</template>

<script>
import truncate from 'vue-truncate-collapsed'

export default {
  components: {
    truncate
  },
  name: 'HomeInfo',
  props: {
    msg: String
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.works {
  display: flex;
}

/* Create two equal columns that sits next to each other */
.col {
  flex: 50%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

.hello {
      font-family: "CircularStd-Book", sans-serif;
      margin: auto;
      padding: 10px;
}

ul {
  margin: 0;
  padding: 0;
}

.works:a {
  color: red;
}

li {
  display: inline-block;
  margin: 0;
  padding-right: 10px;
  padding-left: 10px;
}

.col:hover > li {
  opacity: 0.5;
}

.col:hover > li:hover {
  opacity: 1.0;
}

.highlight:hover > section {
  opacity: 0.5;
}

.highlight:hover > section:hover {
  opacity: 1.0;
}
</style>
