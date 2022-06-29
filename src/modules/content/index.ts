export { default as ContentResolver } from './ContentResolver.vue';

import TextFull from './TextFullSection.vue';
import TextImage from './TextImageSection.vue';
import ImageFull from './ImageFullSection.vue';
import Cards from './CardsSection.vue';
import Infobox from './InfoboxSection.vue';
import Block from './BlockSection.vue';
import Accordion from './AccordionSection.vue';
import ImageCarousel from './ImageCarousel.vue';
import LogoWall from './LogoWallSection.vue';
import GridGallery from './GridGallerySection.vue';

// Add all content seciton components to the following object under the
// corresponding key:

export const contentSectionComponents = {
    text_full: TextFull,
    text_image: TextImage,
    image_full: ImageFull,
    cards: Cards,
    info_box: Infobox,
    block: Block,
    accordion: Accordion,
    image_carousel: ImageCarousel,
    logo_wall: LogoWall,
    grid_gallery: GridGallery,
};
