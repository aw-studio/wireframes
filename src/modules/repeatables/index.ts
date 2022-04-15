export { default as Repeatables } from './Repeatables.vue';

import TextFullRepeatable from "./TextFullRepeatable.vue";
import ImageFullRepeatable from "./ImageFullRepeatable.vue";
import CardsRepeatable from "./CardsRepeatable.vue";

// Add all repeatable components to the following object under the corresponding 
// key:

export const repeatableComponents = {
    text_full: TextFullRepeatable,
    image_full: ImageFullRepeatable,
    cards: CardsRepeatable
}