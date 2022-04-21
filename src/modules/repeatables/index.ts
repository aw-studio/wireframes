export { default as Repeatables } from './Repeatables.vue';

import TextFull from "./RepTextFull.vue";
import ImageFull from "./RepImageFull.vue";
import InfoBox from "./RepInfoBox.vue";
import Cards from "./RepCards.vue";

// Add all repeatable components to the following object under the corresponding 
// key:

export const repeatableComponents = {
    text_full: TextFull,
    image_full: ImageFull,
    info_box: InfoBox,
    cards: Cards
}