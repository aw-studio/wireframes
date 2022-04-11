<template>
    <ul
        v-click-outside="hideNavigation"
        ref="desktop_nav"
        class="hidden lg:flex items-end h-[100px] flex-wrap gap-10"
    >
        <li v-for="(entry, i) in navigation">
            <a
                v-if="!hasChildren(entry)"
                :href="entry.link"
                class="font-semibold"
            >
                {{ entry.name }}
            </a>
            <div class="relative" v-if="hasChildren(entry)">
                <button
                    @click="toggleSubnavLevel1(i, 'bottom')"
                    class="flex items-center gap-2 font-semibold"
                    :class="`nav-button-${i}`"
                >
                    <span>{{ entry.name }}</span>
                    <svg
                        v-if="hasChildren(entry)"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-5 -8 24 24"
                        width="16"
                        fill="currentColor"
                        class="transition-transform duration-300"
                    >
                        <path
                            d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
                        ></path>
                    </svg>
                </button>
                <div class="absolute hidden sub-nav-1">
                    <div class="arrow"></div>
                    <ul
                        class="relative text-left min-w-[240px] bg-secondary p-4 flex flex-col gap-5"
                    >
                        <li as="li" v-for="(child, j) in entry.children">
                            <a
                                v-if="!hasChildren(child)"
                                :href="child.link"
                                class="font-semibold text-white"
                            >
                                {{ child.name }}
                            </a>
                            <div class="relative" v-if="hasChildren(child)">
                                <button
                                    @click="
                                        toggleSubnavLevel2(i, j, 'right-start')
                                    "
                                    class="flex justify-between w-full gap-2 font-semibold text-left text-white"
                                    :class="`nav-button-${i}-${j}`"
                                >
                                    <span>{{ child.name }}</span>
                                    <svg
                                        v-if="hasChildren(child)"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="-5 -8 24 24"
                                        width="16"
                                        fill="currentColor"
                                        class="pt-1.5 transition-transform duration-300"
                                    >
                                        <path
                                            d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
                                        ></path>
                                    </svg>
                                </button>
                                <div class="absolute hidden sub-nav-2">
                                    <div class="arrow"></div>
                                    <ul
                                        class="relative text-left min-w-[240px] bg-secondary p-4 flex flex-col gap-5"
                                    >
                                        <li
                                            as="li"
                                            v-for="subChild in child.children"
                                        >
                                            <a
                                                :href="subChild.link"
                                                class="font-semibold text-white"
                                            >
                                                {{ subChild.name }}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { computePosition, flip, shift, offset, arrow } from '@floating-ui/dom';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps({
    navigation: {
        type: Object,
    },
});

const desktop_nav = ref(null);

/**
 * Checks weither or not a navigation point has sub points or not
 *
 * @param entry navigation point to be checked
 */
const hasChildren = (entry: any) => {
    if (!entry.children || entry.children.length <= 0) {
        return false;
    }
    return true;
};

/**
 * Method uses floating ui library to position the sub nav correctly
 *
 * @param button        button element that triggers the tooltip
 * @param tooltip       tooltip element that opens at trigger
 * @param arrowElement  arrow that should be shown
 * @param placement     where the tooltip should be placed in relation to the button
 */
const update = (
    button: any,
    tooltip: any,
    arrowElement: any,
    placement: any
) => {
    computePosition(button, tooltip, {
        placement: placement ?? 'bottom',
        middleware: [
            flip(),
            shift({ padding: 10 }),
            offset(18),
            arrow({ element: arrowElement }),
        ],
    }).then(({ x, y, placement, middlewareData }) => {
        Object.assign(tooltip.style, {
            left: `${x}px`,
            top: `${y}px`,
        });

        const { x: arrowX, y: arrowY } = middlewareData.arrow;

        const staticSide: string = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
        }[placement.split('-')[0]] as string;

        Object.assign(arrowElement.style, {
            left: arrowX != null ? `${arrowX}px` : '',
            top: arrowY != null ? `${arrowY}px` : '',
            right: '',
            bottom: '',
            [staticSide]: '-4px',
        });
    });
};

/**
 * close all sub navigations
 */
const hideNavigation = () => {
    const tooltipsLevel1: any = document.querySelectorAll(`.sub-nav-1`);
    tooltipsLevel1.forEach((element: any) => {
        element.style.display = '';
    });
    const tooltipsLevel2: any = document.querySelectorAll(`.sub-nav-2`);
    tooltipsLevel2.forEach((element: any) => {
        element.style.display = '';
    });
};

/**
 * position the first sub nav level
 *
 * @param index     index of the nav entry
 * @param placement positioning of the sub nav
 */
const positioningLevel1 = (index: any, placement: any) => {
    const button: any = document.querySelector(`.nav-button-${index}`);
    const tooltip: any = document.querySelector(`.nav-button-${index} + div`);
    const arrowElement: any = document.querySelector(
        `.nav-button-${index} + div > .arrow`
    );

    update(button, tooltip, arrowElement, placement);
};

/**
 * open the first sub nav for specific nav entry
 *
 * @param index     Index of the nav entry
 * @param placement poisitioning of the sub navigation
 */
const showSubnavLevel1 = (index: any, placement: any) => {
    const tooltip: any = document.querySelector(`.nav-button-${index} + div`);
    tooltip.style.display = 'block';
    positioningLevel1(index, placement);
};

/**
 * close the first sub nav for specific nav entry
 *
 * @param index Index of the nav entry
 */
const hideSubnavLevel1 = (index: any) => {
    const tooltip: any = document.querySelector(`.nav-button-${index} + div`);
    tooltip.style.display = '';
};

/**
 * check if sub nav at index should be opened or closed and close all other subnavs that are open
 *
 * @param index Index of the nav entry
 * @param placement positioning of the sub nav
 */
const toggleSubnavLevel1 = (index: any, placement: any) => {
    const tooltip: any = document.querySelector(`.nav-button-${index} + div`);
    const tooltips: any = document.querySelectorAll(`.sub-nav-1`);
    tooltips.forEach((element: any) => {
        if (element == tooltip) {
            element.style.display = element.style.display;
        }
        if (element != tooltip) {
            element.style.display = '';
            const tooltipsLevel2: any = document.querySelectorAll(`.sub-nav-2`);
            tooltipsLevel2.forEach((element: any) => {
                element.style.display = '';
            });
        }
    });
    if (tooltip.style.display == 'block') {
        hideSubnavLevel1(index);
        return;
    }
    if (tooltip.style.display != 'block') {
        showSubnavLevel1(index, placement);
        return;
    }
};

/**
 * position the second sub nav level
 *
 * @param indexLevel1  index of first nav entry
 * @param indexLevel2  index of second nav level
 * @param placement    positioning of the sub nav
 */
const positioningLevel2 = (
    indexLevel1: any,
    indexLevel2: any,
    placement: any
) => {
    const button: any = document.querySelector(
        `.nav-button-${indexLevel1}-${indexLevel2}`
    );
    const tooltip: any = document.querySelector(
        `.nav-button-${indexLevel1}-${indexLevel2} + div`
    );
    const arrowElement: any = document.querySelector(
        `.nav-button-${indexLevel1}-${indexLevel2} + div > .arrow`
    );

    update(button, tooltip, arrowElement, placement);
};

/**
 * open the second sub nav for specific nav entry
 *
 * @param indexLevel1  index of first nav entry
 * @param indexLevel2  index of second nav level
 * @param placement    poisitioning of the sub navigation
 */
const showSubnavLevel2 = (
    indexLevel1: any,
    indexLevel2: any,
    placement: any
) => {
    const tooltip: any = document.querySelector(
        `.nav-button-${indexLevel1}-${indexLevel2} + div`
    );
    tooltip.style.display = 'block';
    positioningLevel2(indexLevel1, indexLevel2, placement);
};

/**
 * close the second sub nav for specific nav entry
 *
 * @param indexLevel1  index of first nav entry
 * @param indexLevel2  index of second nav level
 */
const hideSubnavLevel2 = (indexLevel1: any, indexLevel2: any) => {
    const tooltip: any = document.querySelector(
        `.nav-button-${indexLevel1}-${indexLevel2} + div`
    );
    tooltip.style.display = '';
};

/**
 * check if sub nav at index should be opened or closed and close all other subnavs that are open
 *
 * @param indexLevel1  index of first nav entry
 * @param indexLevel2  index of second nav level
 * @param placement    positioning of the sub nav
 */
const toggleSubnavLevel2 = (
    indexLevel1: any,
    indexLevel2: any,
    placement: any
) => {
    const tooltip: any = document.querySelector(
        `.nav-button-${indexLevel1}-${indexLevel2} + div`
    );
    const tooltips: any = document.querySelectorAll(`.sub-nav-2`);
    tooltips.forEach((element: any) => {
        if (element == tooltip) {
            element.style.display = element.style.display;
        }
        if (element != tooltip) {
            element.style.display = '';
        }
    });
    if (tooltip.style.display == 'block') {
        hideSubnavLevel2(indexLevel1, indexLevel2);
        return;
    }
    if (tooltip.style.display != 'block') {
        showSubnavLevel2(indexLevel1, indexLevel2, placement);
        return;
    }
};
</script>

<style>
.arrow {
    position: absolute;
    background: var(--color-secondary-default);
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
}
</style>
