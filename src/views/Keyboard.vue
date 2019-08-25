<template>
  <div class="bookmarklet-view">
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-8">
          <h1 class="mb-5">Klingon Keyboard</h1>
          <div v-html="klingon" class="klingon mb-3"></div>
          <textarea
            cols="30"
            rows="10"
            class="form-control mb-5"
            v-model="roman"
          ></textarea>
          <p>
            For beginner learners of
            <a href="https://en.wikipedia.org/wiki/Klingon_language">Klingon</a
            >, sometimes it's very difficult to type the
            <a href="https://en.wikipedia.org/wiki/Klingon_scripts"
              >Klingon script</a
            >, given its numerous subtly differnt sounds and letter-combining
            rules.
          </p>
          <p>
            For this reason, we created the
            <b>"Klingon Keyboard"</b> so you can type right here on this web
            page.
          </p>
          <div class="mt-2 mb-4 bg-light p-4 shadow rounded">
            <p>
              How to use:
            </p>
            <ol>
              <li>
                Just type in the above text input field, and Klingon letters
                will show up on top.
              </li>
              <li>
                If you see squares instead of Klingon letters, download the
                <a href="http://www.evertype.com/fonts/tlh/">pIqaD</a> font
                first.
              </li>
            </ol>
          </div>
          <p class="mt-4">
            The Klingon characters are displayed with private Unicode
            characters. To see them properly, download and install the
            <a href="http://www.evertype.com/fonts/tlh/">pIqaD</a> font.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roman: '',
      conv: [
        {
          roman: 'a',
          klingon: '',
          ipa: 'ɑ'
        },
        {
          roman: 'b',
          klingon: '',
          ipa: 'b'
        },
        {
          roman: 'ch',
          klingon: '',
          ipa: 't͡ʃ'
        },
        {
          roman: 'D',
          klingon: '',
          ipa: 'ɖ'
        },
        {
          roman: 'e',
          klingon: '',
          ipa: 'ɛ'
        },
        {
          roman: 'gh',
          klingon: '',
          ipa: 'ɣ'
        },
        {
          roman: 'H',
          klingon: '',
          ipa: 'x'
        },
        {
          roman: 'I',
          klingon: '',
          ipa: 'ɪ'
        },
        {
          roman: 'j',
          klingon: '',
          ipa: 'd͡ʒ'
        },
        {
          roman: 'l',
          klingon: '',
          ipa: 'l'
        },
        {
          roman: 'm',
          klingon: '',
          ipa: 'm'
        },
        {
          roman: 'n',
          klingon: '',
          ipa: 'n'
        },
        {
          roman: 'ng',
          klingon: '',
          ipa: 'ŋ'
        },
        {
          roman: 'o',
          klingon: '',
          ipa: 'o'
        },
        {
          roman: 'p',
          klingon: '',
          ipa: 'pʰ'
        },
        {
          roman: 'q',
          klingon: '',
          ipa: 'qʰ'
        },
        {
          roman: 'Q',
          klingon: '',
          ipa: 'q͡χ'
        },
        {
          roman: 'r',
          klingon: '',
          ipa: 'r'
        },
        {
          roman: 'S',
          klingon: '',
          ipa: 'ʂ'
        },
        {
          roman: 't',
          klingon: '',
          ipa: 'tʰ'
        },
        {
          roman: 'tlh',
          klingon: '',
          ipa: 't͡ɬ'
        },
        {
          roman: 'u',
          klingon: '',
          ipa: 'u'
        },
        {
          roman: 'v',
          klingon: '',
          ipa: 'v'
        },
        {
          roman: 'w',
          klingon: '',
          ipa: 'w'
        },
        {
          roman: 'y',
          klingon: '',
          ipa: 'j'
        },
        {
          roman: 'ʼ',
          klingon: '',
          ipa: 'ʔ'
        }
      ]
    }
  },
  created() {
    this.conv = this.conv.sort((a, b) => b.roman.length - a.roman.length)
  },
  computed: {
    klingon() {
      let klingon = this.roman
      for (let char of this.conv) {
        klingon = klingon.replace(new RegExp(char.roman, 'g'), char.klingon)
      }
      return klingon
    }
  }
}
</script>

<style scoped>
.klingon {
  font-family: Constructium, Unifont CSUR, Klingon pIqaD HaSta, Code2000, Horta;
  font-size: 2rem;
}
</style>
