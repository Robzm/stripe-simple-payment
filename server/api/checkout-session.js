import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { priceId } = body;

  if (!priceId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Price ID is required'
    });
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price: priceId,
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${process.env.NUXT_PUBLIC_SITE_URL || 'https://stripe-simple-payment.vercel.app/'}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NUXT_PUBLIC_SITE_URL || 'https://stripe-simple-payment.vercel.app/'}/cancel`,
  });

  return { url: session.url };
});