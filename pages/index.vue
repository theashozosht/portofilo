<template>
  <section class="page-field">
    <div class="intro-field">
      <div class="intro-bg"></div>
      <div class="custom-container page-section">
        <!-- Introduction Row With CV Downloader And Constructor Card -->
        <div class="row intro-row">
          <div class="col-md-6 constructor-card" dir="rtl">
            <div class="constructor-card__field" dir="ltr">
              <p class="code-mode">
                1&nbsp;&nbsp;class <b>Person</b
                ><!-- -->{
              </p>
              <p class="code-mode">
                2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor()<!-- -->{
              </p>
              <p class="code-mode">
                3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = "<b
                  >Yasin Satvati</b
                >";
              </p>
              <p class="code-mode">
                4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits =
                ["<b>Design</b>", "<b>Dev</b>"];
              </p>
              <p class="code-mode">
                5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age =
                <!-- -->new Date().getFullYear() - 2000;
              </p>
              <p class="code-mode">
                6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- -->}
              </p>
              <p class="code-mode">7&nbsp;&nbsp;<!-- -->}</p>
            </div>
          </div>
          <article class="col-md-6 intro-article">
            <p class="m-0">Hello, I’m</p>
            <h1>YASIN SATVATI</h1>
            <p class="adjust">CREATIVE FRONT-END WEB DEVELOPER</p>
            <div class="intro-cv">
              <a class="intro-cv__btn text-decoration-none" href="#">
                Download Resume
              </a>
            </div>
          </article>
        </div>
        <!-- Three Boxes Of My Interesets In Programming -->
        <div class="row intersets-row">
          <section class="col-sm-4 intersets-cards">
            <figure class="intersets-card__image">
              <img
                class="img"
                src="~/assets/media/images/Index-Page/creativity.svg"
              />
            </figure>
            <article class="intersets-card__article" dir="ltr">
              <h1 class="intersets-card__article__header">
                Creative Coding
              </h1>
              <p class="intersets-card__article__text">
                I love creative coding because I do both coding & designing.
                making beautiful art with code is very satisfying to me.
              </p>
            </article>
          </section>
          <section class="col-sm-4 intersets-cards">
            <figure class="intersets-card__image">
              <img
                class="img"
                src="~/assets/media/images/Index-Page/nuxtjs-icon.svg"
              />
            </figure>
            <article class="intersets-card__article" dir="ltr">
              <h1 class="intersets-card__article__header">
                Nuxtjs
              </h1>
              <p class="intersets-card__article__text">
                I just extremely love Nuxtjs, I can’t even express how much I
                love Nuxtjs with just a few lines.
              </p>
            </article>
          </section>
          <section class="col-sm-4 intersets-cards">
            <figure class="intersets-card__image">
              <img
                class="img"
                src="~/assets/media/images/Index-Page/html-tag.svg"
              />
            </figure>
            <article class="intersets-card__article" dir="ltr">
              <h1 class="intersets-card__article__header">
                FrontEnd
              </h1>
              <p class="intersets-card__article__text">
                I'm more front end focused and love to work with Nuxtjs as well
                as HTML5, SCSS.
              </p>
            </article>
          </section>
        </div>
        <!-- What You Want To Know About Me and My Picture -->
        <div class="row about-me" id="about-me">
          <section class="about-me__image">
            <figure class="about-me__image__card">
              <img
                class="my-image"
                src="~/assets/media/images/Index-Page/my-image.png"
              />
            </figure>
          </section>
          <article class="about-me__article">
            <h1 class="about-me__article__header numbered-header">
              About Me
            </h1>
            <p class="about-me__article__text">
              Hello! My name is Yasin and I enjoy creating things that live on
              the internet. My interest in web development started back in 2019
              when I decided to try my chance to get my first job as a C++
              programmer which turns out it might be the very first steps of
              Front-End !
              <br />
              <br />
              Fast-forward to today, I have exprienced many thing in my work and
              built Website and CRM systems (Client Manage) or even SEO tracker
              which made a better version of me by learning every day and trying
              my best on each projects.
              <br />
              <br />
              I also recently built some crypto currency exchange websites by
              vue and nuxt.js and ofcoruse some GSAP (Green Socks) added for our
              animations
              <br />
              <br />
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul class="skillsets">
              <li class="skillsets__item">
                Html5
              </li>
              <li class="skillsets__item">
                Scss
              </li>
              <li class="skillsets__item">
                JavaScript (ES6+)
              </li>
              <li class="skillsets__item">
                WordPress (NewBee)
              </li>
              <li class="skillsets__item">
                Vue.js
              </li>
              <li class="skillsets__item">
                Nuxt.js
              </li>
              <li class="skillsets__item">
                TypeScript
              </li>
              <li class="skillsets__item">
                Angular
              </li>
            </ul>
          </article>
        </div>
        <!--  Where I’ve Worked Recently And What Have I Done There -->
        <div class="row exprience" id="exprience">
          <article class="exprience-article">
            <h1 class="exprience-article__header  numbered-header">
              Where I’ve Worked
            </h1>
            <div class="flex-container">
              <section class="exprience-article__button-sections">
                <button
                  class="mobile"
                  v-for="(item, index) in companies"
                  :key="index"
                  @click="company_changer(index)"
                >
                  {{ item.button }}
                </button>
                <button
                  class="desktop"
                  v-for="(item, index) in companies"
                  :key="index"
                  @click="company_changer(index)"
                >
                  {{ item.button }}
                </button>
                <span
                  class="actived-border  desktop"
                  :style="{
                    transform: `translateY(calc(${buttonsIndex} * var(--tab-height)))`
                  }"
                ></span>
                <span
                  class="actived-border mobile"
                  :style="{
                    transform: `translateX(calc(${buttonsIndex} * var(--tab-width)))`
                  }"
                ></span>
              </section>
              <section
                class="exprience-article__content"
                v-for="(item, index) in companies"
                :key="index"
                :class="[index == buttonsIndex ? '' : 'd-none']"
              >
                <h3 class="exprience-article__content__header">
                  <span>
                    {{ item.content.job }}
                  </span>
                  <span class="office">
                    {{ item.button }}
                  </span>
                </h3>
                <p class="exprience-article__content__range">
                  {{ item.content.range }}
                </p>
                <ul class="exprience-article__content__list">
                  <li
                    class="exprience-article__content__list__item"
                    v-for="(objects, position) in item.content.projects"
                    :key="position"
                  >
                    {{ objects }}
                  </li>
                </ul>
              </section>
            </div>
          </article>
        </div>
        <!--  Projects Which I Was Working On it -->
        <div class="row works" id="works">
          <article class="works-article">
            <h1 class="works-article__header numbered-header">
              Some Things I’ve Built
            </h1>
            <section
              class="works-card"
              v-for="(item, index) in works"
              :key="index"
            >
              <article class="works-card__article">
                <p class="works-card__article__subheader">
                  {{ item.subheader }}
                </p>
                <h1 class="works-card__article__header">
                  <a class="header__link" :href="item.header.link">
                    {{ item.header.text }}
                  </a>
                </h1>
                <section class="works-card__article__content">
                  <p class="">
                    {{ item.content }}
                  </p>
                </section>
                <ul class="works-card__article__techlist">
                  <li
                    v-for="(object, position) in item.techlist"
                    :key="position"
                  >
                    {{ object }}
                  </li>
                </ul>
                <div class="works-card__article__links">
                  <a
                    v-if="item.links.github"
                    :href="item.links.github"
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-github"
                    >
                      <title>GitHub</title>
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      ></path>
                    </svg>
                  </a>
                  <a
                    v-if="item.links.external"
                    :href="item.links.external"
                    aria-label="External Link"
                    class="external"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-external-link"
                    >
                      <title>External Link</title>
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </article>
              <div class="works-card__img">
                <a class="works-card__img__link">
                  <div class="works-card__img__wrapper">
                    <div class="works-card__img__holder">
                      <img :src="item.img.src" :alt="item.img.alt" />
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </article>
        </div>
        <!-- Contact With Me Row -->
        <div class="row contact" id="contact-me">
          <article class="contact-article">
            <h1 class="contact-article__header  numbered-header">
              What's Next ?
            </h1>
            <p class="contact-article__header2">
              Get in touch
            </p>
            <p class="contact-article__content">
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>
            <a
              class="contact-article__link"
              href="mailto:ashozoshtofficial@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              >Say Hello</a
            >
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "index",
  data: () => ({
    buttonsIndex: 0,
    companies: [
      {
        button: "Afraz",
        content: {
          job: "Front-End Junior Developer",
          range: "June - December 2020",
          projects: [
            "Developed CRM system by using jQuery framework and basics of Front-End",
            "Personalized Highcharts and Chartjs for this company also translating them from English to Persian",
            "Developed and shipped many companies websites and landing with Html, css, js, jQuery ",
            "Learned what is Front-End and one the most popular js frameworks which is jQuery"
          ]
        }
      },
      {
        button: "Xaankoo",
        content: {
          job: "Front-End Developer",
          range: "January - June 2021",
          projects: [
            "Built and shipped one of the first SEO trackers of iran by using Vue.js 3 ",
            "Developed Wordpress Extensions and Learning how to use wordpress and php ",
            "Programmed Content Analyzer on SEO tracker and many other features ",
            "Learned Vue.js and also I have Learned how to use wordpress and php "
          ]
        }
      },
      {
        button: "Hampa",
        content: {
          job: "Front-End Developer",
          range: "June - December 2021",
          projects: [
            "Developed and shipped highly interactive web applications for Crypto Currency using Nuxt.js",
            "Built and shipped personalized Tronlink Chrome Extension using ES6 and internal APIs",
            "Architected and implemented the front-end of Websites and Landing of Crypto Currency ",
            "Learned how to use TypeScript, Angular, Nuxt.js, GSAP, and so many other skills "
          ]
        }
      }
    ],
    works: [
      {
        subheader: "Featured Project",
        header: {
          link: "#",
          text: "Crm System"
        },
        content: `
            A Web app to management your customer relationships with formal
            design which fits perfectly for companies this crm system was built
            using jQuery framework it has been lunched at 2019 and since then it
            has changed alot which there is not pictures of them to share with
            you guys
          `,
        techlist: ["Html", "Css", "JS", "ES6", "jQuery"],
        links: {
          github: false,
          external: false
        },
        img: {
          src: require("~/assets/media/images/Index-Page/resume/afraz-crm.jpg"),
          alt: "Afraz Crm System"
        }
      },
      {
        subheader: "Featured Project",
        header: {
          link: "https://www.xaankoo.com",
          text: "Xaankoo HomePage"
        },
        content: `
                    A Website for xaankoo creativity agency company which was inspired from another theme,
                    this website was developed using vue.js and nuxt.js for first versions, Given that it
                    would have been changed in the future
                  `,
        techlist: ["Vue.js", "Wordpress", "Scss", "Figma"],
        links: {
          github: false,
          external: "https://www.xaankoo.com/"
        },
        img: {
          src: require("~/assets/media/images/Index-Page/resume/xaankoo-homepage.jpg"),
          alt: "xaankoo home page"
        }
      },
      {
        subheader: "Featured Project",
        header: {
          link: "https://www.xaankoo.com/tracker/",
          text: "Xaankoo SEO Tracker"
        },
        content: `
                    A Web App for xaankoo creativity agency company for traking the seo of your website
                    with the best features suchs content managment, google analytics, and ...
                    this web app was written from the base by Vue.js which was my first project with Vue.js 
                  `,
        techlist: ["Vue.js", "Wordpress", "Scss", "Figma"],
        links: {
          github: false,
          external: "https://www.xaankoo.com/tracker/"
        },
        img: {
          src: require("~/assets/media/images/Index-Page/resume/xaankoo-dashboard.jpg"),
          alt: "Xaankoo SEO Tracker"
        }
      },
      {
        subheader: "Featured Project",
        header: {
          link: "https://www.novintex.com",
          text: "Novintex Exchange "
        },
        content: `
                    A Web App to Exchange your crypto currency with the minimum wage for each transaction and 
                    the maximum speed, this web app was written for Novintex and it has been developed and
                    shipped by using Nuxt.js, for both dashboard and landing pages  
                  `,
        techlist: [
          "Vue.js",
          "Nuxt.js",
          "Web Sockets",
          "Styled Components",
          "SEO",
        ],
        links: {
          github: false,
          external: "https://www.novintex.com/"
        },
        img: {
          src: require("~/assets/media/images/Index-Page/resume/novintex-blue.jpg"),
          alt: "novintext web app"
        }
      },
    ]
  }),
  methods: {
    company_changer(position) {
      this.buttonsIndex = position;
    }
  }
};
</script>
<style lang="scss" scoped></style>
