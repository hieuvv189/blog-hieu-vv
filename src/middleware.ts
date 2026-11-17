import { defineMiddleware } from 'astro:middleware';
import { PRODUCTS } from './data/molli';
import { legacyProductTarget } from './utils/legacy-product-links';

const productCodes = new Set(PRODUCTS.map(product => product.code));
export const onRequest = defineMiddleware((context, next) => {
 const target = legacyProductTarget(context.url.pathname, productCodes);
 if (target) return context.redirect(`${target}${context.url.search}`, 301);
 return next();
});
