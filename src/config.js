
const config = {
    siteTitle: "Hackiosk",
    menuItems: [
        {
            url : "/",
            name: "Home"
        },
        {
            url : "/labels",
            name: "Labels"
        },
        {
            url : "/snackspace",
            name: "Snackspace"
        },
        {
            url : "/members",
            name: "Members"
        }

    ],
    snackspace:{
        products: [
            {
                name: "Twix",
                category: "Chocolates",
                price: 0.50,
                barcode: 123123123
            },
            {
                name: "Large Noodle Pot",
                category: "Noodles",
                price: 1.50,
                barcode: 654546346
            },
            {
                name: "Pepsi Max Can",
                category: "Drinks",
                price: 0.50,
                barcode: 75374747
            },
            {
                name: "Pepsi Max Cherry",
                category: "Drinks",
                price: 0.50,
                barcode: 25252525
            }
        ]
    }
};

module.exports = config;