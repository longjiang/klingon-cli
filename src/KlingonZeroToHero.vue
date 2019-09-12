<template>
  <div id="klingon-zero-to-hero">
    <div class="container-fluid bg-dark pt-4 pb-4 pl-0 pr-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <img src="/img/logo-tlh-zth-light.png" alt="Klingon Zero to Hero" class="logo" />
          </div>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view ref="routerView" />
    </keep-alive>

    <footer class="container-fluid bg-dark text-light pt-4 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <LanguageLogos />
            <hr class="border-light" style="opacity: 0.5" />
            <p>
              <b>Zero to Hero Education, Canada.</b>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import LanguageLogos from '@/components/LanguageLogos'
export default {
  components: {
    LanguageLogos
  }
}
</script>

<style>
.logo {
  height: 6rem;
}
.logo-footer {
  height: 4rem;
}
</style>
