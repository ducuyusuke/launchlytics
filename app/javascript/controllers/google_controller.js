import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("google conectado");

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      return rect.top <= windowHeight && rect.bottom >= 100;
    }

    const jobs = document.querySelectorAll('.google-text');

    // function handleAnimations() {
    //   jobs.forEach(job => {
    //     if (isElementInViewport(job)) {
    //       job.classList.add('aos-animate');
    //     } else {
    //       job.classList.remove('aos-animate');
    //     }
    //   });
    // }

    document.addEventListener('DOMContentLoaded', handleAnimations);
    window.addEventListener('scroll', handleAnimations);
  }
}
