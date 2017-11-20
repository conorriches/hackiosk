
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
                barcode: 123321123
            },
            {
                name: "Large Noodle Pot",
                category: "Noodles",
                price: 1.50,
                barcode: 123321123
            },
            {
                name: "Pepsi Max Can",
                category: "Drinks",
                price: 0.50,
                barcode: 123321123
            },
            {
                name: "Pepsi Max Cherry",
                category: "Drinks",
                price: 0.50,
                barcode: 123321123
            }
        ]
    }
};

module.exports = config;