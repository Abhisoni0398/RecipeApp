import imagePath from "../../constants/imagePath";
const DATA = [
    {
      title: 'Today',
      data: [
        {
            image: imagePath.offer,
            name: 'Recipe Recommendations',
            time: '2m ago',
            recipe: 'Beef burger cheese burgeer home cooked'
        },{
            image: imagePath.offer,
            name: 'Offer',
            time: '12 min ago',
            recipe: 'Flat 24% off on every recipe ingredients'
        }
      ],
    },
    {
      title: 'Yesterday',
      data: [
        {
            image: imagePath.offer,
            name: 'Order',
            time: '1 day ago',
            recipe: 'Your order has delivered.'
        },{
            image: imagePath.offer,
            name: 'Promo',
            time: '1 day ago',
            recipe: '25% off payment with paypal.'
        },
        {
            image: imagePath.offer,
            name: 'Recipe Recommendation',
            time: '23 hours ago',
            recipe: 'New recipe for spicy egg curry'
        },
        {
            image: imagePath.offer,
            name: 'Order',
            time: '20 hours ago',
            recipe: 'Your order of fried rice is delivered successfully'
        },
      ],
    }
  ];

  export default DATA;