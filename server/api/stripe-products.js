import Stripe from 'stripe';

export default defineEventHandler(async(event) =>{
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    const products = await stripe.products.list({
        expand : ['data.default_price'],
        limit : 10,
        active : true
    })

    return products.data
})