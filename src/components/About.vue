<template>
  <div class="about">
    <router-link to="/"><span class="home">Home</span></router-link><br><br>
    <p>
    <h2 class="name">Alexandria Alcancia-Shaw</h2> is a designer and developer in Montreal, Canada with a special interest in web and print design. She will graduate from Concordia University in 2019, with a specialization in <a href="https://www.concordia.ca/finearts/design/programs/undergraduate/computation-arts-bfa.html">Computation Arts</a> and a minor in Computer Science. She currently works as a research assistant for <a href="https://alicejarry.com/">Alice Jarry.</a> She loves her <a href="https://www.instagram.com/pepperpoodl/">tiny dog</a>, <a href="https://www.kawalingpinoy.com/sapin-sapin/">sapin sapin</a> and <a href="https://www.instagram.com/hiyakerrii/">variegated monsteras</a>. You can reach her at <span class="mailclass"><a href="mailto:alex@alcanciashaw.com">alex at alcanciashaw.com</a></span><br><br>
            </p>

  </div>
</template>

<script>
// @ is an alias to /src

</script>

<style scoped>
.name {
  font-family: "spacemono-ital", monospace;
}

.about {
    font-family: "CircularStd-Book", sans-serif;
    margin: auto;
    padding: 10px;
}

li {
  display: inline-block;
  margin: 0;
  padding: 0;
}

.links:hover > li {
  opacity: 0.5;
}

.links:hover > li:hover {
  opacity: 1.0;
}
</style>
