export { default as Repeatables } from './Repeatables.vue';


import TextFull from "./RepTextFull.vue";
import TextImage from "./RepTextImage.vue";
import ImageFull from "./RepImageFull.vue";
import Cards from "./RepCards.vue";
import Infobox from "./RepInfobox.vue";
import Block from "./RepBlock.vue";
import Accordion from "./RepAccordion.vue";
import Carousel from "./RepCarousel.vue";
import LogoWall from "./RepLogoWall.vue";

// Add all repeatable components to the following object under the corresponding 
// key:

export const repeatableComponents = {
    text_full: TextFull,
    text_image: TextImage,
    image_full: ImageFull,
    cards: Cards,
    info_box: Infobox,
    block: Block,
    accordion: Accordion,
    carousel: Carousel,
    logo_wall: LogoWall,
}