import { AccordionItem } from "../components/Ui/Accordion";

export type Repeatable<M> = {
    type: string,
    value: M
}

export type Repeatables = (
    TextFullRepeatable | 
    TextImageRepeatable |
    ImageFullRepeatable
)[];

export interface Image {
    url: string,
    alt: string,
    title: string,
}
export interface Link {
    url: string,
    text: string
    new_tab: boolean
}

// TextFull
export interface RepTextFull {
    text: string
}
export type TextFullRepeatable = Repeatable<RepTextFull>;

// TextImage
export interface RepTextImage {
    text: string,
    image: Image
}
export type TextImageRepeatable = Repeatable<RepTextImage>;

// RepImageFull
export interface RepImageFull {
    image: Image
}
export type ImageFullRepeatable = Repeatable<RepImageFull>;

// Infobox
export interface RepInfobox {
    title: string
    text: string,
    link: Link,
}
export type InfoboxRepeatable = Repeatable<RepInfobox>;

// Cards
export interface Card {
    title: string,
    text: string,
    image?: Image,
    link?: Link,
}
export interface RepCards {
    headline: string
    items: Card[]
}
export type CardsRepeatable = Repeatable<RepCards>;


// Accordion
export interface RepAccordion {
    headline: string,
    items: AccordionItem[]
}
export type AccordionRepeatable = Repeatable<RepAccordion>;

// LogoWall
export interface LogoWallItem {
    name: string,
    link?: Link,
    image?: Image,
}
export interface RepLogoWall {
    headline: string,
    items: LogoWallItem[]
}
export type LogoWallRepeatable = Repeatable<RepLogoWall>;

// GridGallery
export interface GridGalleryItem {
    name: string,
    link?: Link,
    image?: Image,
}
export interface RepGridGallery {
    headline: string,
    items: GridGalleryItem[]
}
export type GridGalleryRepeatable = Repeatable<RepGridGallery>;

// ImageCarousel
export interface ImageCarouselItem {
    image?: Image,
}
export interface RepImageCarousel {
    items: ImageCarouselItem[]
}
export type ImageCarouselRepeatable = Repeatable<RepImageCarousel>;


