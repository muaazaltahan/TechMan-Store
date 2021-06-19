<template>
  <div class="about">
    <div class="store-info">
      <div class="s-name"><img src="../assets/logo.png" alt="TechMan"></div>
      <div class="s-desc">The World's Greatest Store For Technologies.</div>
      <div class="s-location">Syria - Damascus - Masaken Barzah</div>
      <div class="contact">
        <a href="https://www.facebook.com/DeveloperMuaaz/">
          <img src="../assets/fb.png" alt="Facebook" class="social">
        </a>
        <a href="https://www.instagram.com/muaaz_al_tahan/">
          <img src="../assets/ins.png" alt="Instagram" class="social">
        </a>
        <a href="https://t.me/muaazaltahan">
          <img src="../assets/tel.png" alt="Telegram" class="social">
        </a>
      </div>
    </div>
    <div class="who-am-i">
      <div class="info">Owner: Muaaz Altahan</div>
      <div class="info">17 Years Old From Damascus</div>
      <div class="info">
        See <a href="https://github.com/muaazaltahan">My Projects On Github</a>
      </div>
      <div class="skills">
        <div class="h">Here Are My Skills:</div>
        <div class="skill">Vue.js</div>
        <div class="skill">Native JavaScript</div>
        <div class="skill">JQuery</div>
        <div class="skill">AJAX</div>
        <div class="skill">Fetch API</div>
        <div class="skill">SCSS</div>
        <div class="skill">CSS3</div>
        <div class="skill">HTML5</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  metaInfo: {
    title: 'About Us',
    meta: [
      {
        name: 'description', content: 'About TechMan Store'
      }
    ]
  }
}
</script>