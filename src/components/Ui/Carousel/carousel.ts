import { ref } from "vue";

export const windowWidth = ref(window.innerWidth);

export const onResize = () => {
    windowWidth.value = window.innerWidth;
};

export const isBetween = (min: number, max: number) => {
    if (windowWidth.value >= min && windowWidth.value < max) {
        return true;
    }
    return false;
};

/**
* These breakpoints need to match your applications breakpoints
*/
export const breakpoints = {
   sm: 640,
   md: 768,
   lg: 1024,
   xl: 1280,
   '2xl': 1536,
};