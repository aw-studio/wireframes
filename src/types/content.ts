import { AccordionItem } from '../components/Ui/Accordion';
import {
    Image,
    Link,
    LogoWallItem,
    GridGalleryItem,
    ImageCarouselItem,
    TeaserBoxesItem,
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
    centered: boolean;
}
export type TextFullContentSection = ContentSection<TextFull>;

// TextImage
export interface TextImage {
    text: string;
    image: Image;
    link: Link;
    centered: boolean;
}
export type TextImageContentSection = ContentSection<TextImage>;

// CTA
export interface CTA {
    important: boolean;
    link?: Link;
    centered: boolean;
}
export type CTAContentSection = ContentSection<CTA>;

// Video Embed
export interface VideoEmbed {
    id: string;
    centered: boolean;
}
export type VideoEmbedContentSection = ContentSection<VideoEmbed>;

// Image
export interface ImageSmall {
    image: Image;
    centered: boolean;
}
export type ImageSmallContentSection = ContentSection<ImageSmall>;

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
    centered: boolean;
}
export type InfoboxContentSection = ContentSection<Infobox>;

// TeaserBoxes
export interface TeaserBoxes {
    items: TeaserBoxesItem[];
}
export type TeaserBoxesSection = ContentSection<TeaserBoxes>;

// InfoSection
export interface InfoSection {
    text: string;
    image: Image;
    link: Link;
}
export type InfoSectionContentSection = ContentSection<InfoSection>;

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
    centered: boolean;
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
