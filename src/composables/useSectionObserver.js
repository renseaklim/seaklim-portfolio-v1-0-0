// src/composables/useSectionObserver.js
import { ref, onMounted, onBeforeUnmount } from 'vue';

const activeSection = ref('#home');

export function useSectionObserver(sectionIds = []) {
  let observer;

  onMounted(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, 
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
          activeSection.value = `#${entry.target.id}`;
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  });

  onBeforeUnmount(() => {
    if (observer) observer.disconnect();
  });

  return { activeSection };
}
