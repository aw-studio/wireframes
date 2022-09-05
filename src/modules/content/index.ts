export { default as ContentResolver } from './ContentResolver.vue';

import H2 from './H2Section.vue';
import TextFull from './TextFullSection.vue';
import TextImage from './TextImageSection.vue';
import ImageFull from './ImageFullSection.vue';
import ImageSmall from './ImageSmallSection.vue';
import Cards from './CardsSection.vue';
import CTA from './CTASection.vue';
import Infobox from './InfoboxSection.vue';
import InfoSection from './InfoSectionSection.vue';
import Block from './BlockSection.vue';
import Accordion from './AccordionSection.vue';
import ImageCarousel from './ImageCarouselSection.vue';
import LogoWall from './LogoWallSection.vue';
import GridGallery from './GridGallerySection.vue';
import VideoEmbed from './VideoEmbedSection.vue';
import TeaserBoxes from './TeaserBoxesSection.vue';

// Add all content seciton components to the following object under the
// corresponding key:

export const contentSectionComponents = {
    h2: H2,
    cta: CTA,
    text_full: TextFull,
    text_image: TextImage,
    image_full: ImageFull,
    image_small: ImageSmall,
    info_section: InfoSection,
    teaser_boxes: TeaserBoxes,
    cards: Cards,
    info_box: Infobox,
    block: Block,
    accordion: Accordion,
    image_carousel: ImageCarousel,
    logo_wall: LogoWall,
    grid_gallery: GridGallery,
    video_embed: VideoEmbed,
};
