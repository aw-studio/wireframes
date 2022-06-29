import { AccordionItem } from '../components/Ui/Accordion';
import {
    Image,
    Link,
    LogoWallItem,
    GridGalleryItem,
    ImageCarouselItem,
} from './';

export type ContentSection<M> = {
    type: string;
    value: M;
};

export type ContentSections = (
    | TextFullContentSection
    | TextImageContentSection
    | ImageFullContentSection
)[];

// TextFull
export interface TextFull {
    text: string;
}
export type TextFullContentSection = ContentSection<TextFull>;

// TextImage
export interface TextImage {
    text: string;
    image: Image;
}
export type TextImageContentSection = ContentSection<TextImage>;

// ImageFull
export interface ImageFull {
    image: Image;
}
export type ImageFullContentSection = ContentSection<ImageFull>;

// Infobox
export interface Infobox {
    title: string;
    text: string;
    link: Link;
}
export type InfoboxContentSection = ContentSection<Infobox>;

// Cards
export interface Card {
    title: string;
    text: string;
    image?: Image;
    link?: Link;
}
export interface Cards {
    headline: string;
    items: Card[];
}
export type CardsContentSection = ContentSection<Cards>;

// Accordion
export interface Accordion {
    headline: string;
    items: AccordionItem[];
}
export type AccordionContentSection = ContentSection<Accordion>;

// LogoWall
export interface LogoWall {
    headline: string;
    items: LogoWallItem[];
}
export type LogoWallContentSection = ContentSection<LogoWall>;

// GridGallery
export interface GridGallery {
    headline: string;
    items: GridGalleryItem[];
}
export type GridGalleryContentSection = ContentSection<GridGallery>;

// ImageCarousel

export interface ImageCarousel {
    items: ImageCarouselItem[];
}
export type ImageCarouselContentSection = ContentSection<ImageCarousel>;
