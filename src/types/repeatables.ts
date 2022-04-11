
export type Repeatable<M> = {
    type: string,
    value: M
}

export type Repeatables = (
    TextFullRepeatable | 
    TextImageRepeatable
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

