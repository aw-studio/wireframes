export interface Image {
    url: string;
    alt: string;
    title: string;
}
export interface Link {
    url: string;
    text: string;
    new_tab: boolean;
}
export interface LogoWallItem {
    name: string;
    link?: Link;
    image?: Image;
}
export interface LogoWallItem {
    name: string;
    link?: Link;
    image?: Image;
}
export interface ImageCarouselItem {
    image?: Image;
}
export interface GridGalleryItem {
    name: string;
    link?: Link;
    image?: Image;
}
