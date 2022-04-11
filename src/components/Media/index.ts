export { default as Image } from './Image.vue';
export { default as ImageGallery } from './ImageGallery.vue';
export { default as ImageGalleryModal } from './ImageGalleryModal.vue';
export { default as VideoEmbed } from './VideoEmbed.vue';

export interface ImageInterface {
    id: number;
    original_url: string;
    alt?: string;
    title?: string;
}