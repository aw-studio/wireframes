import { Media } from "./resources";

export type Repeatable<M> = {
    type: string,
    value: M
}

export type Repeatables = (
    TextFullRepeatable | 
    TextImageRepeatable |
    ImageFullRepeatable
)[];

// TextFull

export interface TextFull {
    text: string
}
export type TextFullRepeatable = Repeatable<TextFull>;

// TextImage

export interface TextImage {
    text: string,
    image: string
}
export type TextImageRepeatable = Repeatable<TextImage>;

// ImageFullRepeatable

export interface ImageFull {
    image: Media
}
export type ImageFullRepeatable = Repeatable<ImageFull>;

// Infobox

export interface Infobox {
    title: string
    text: string,
    link: {
        url: string,
        text: string
    },
}
export type InfoboxRepeatable = Repeatable<Infobox>;