const config = {
  siteTitle: "Hackiosk",
  menuItems: [
    {
      url: "/",
      name: "Home"
    },
    {
      url: "/labels",
      name: "Labels"
    },
    {
      url: "/snackspace",
      name: "Snackspace"
    },
    {
      url: "/members",
      name: "Members"
    }
  ],
  snackspace: {
    products: [
      {
        name: "Twix",
        category: "Chocolates",
        price: 0.5,
        barcode: 123123123
      },
      {
        name: "Large Noodle Pot",
        category: "Noodles",
        price: 1.5,
        barcode: 654546346
      },
      {
        name: "Pepsi Max Can",
        category: "Drinks",
        price: 0.5,
        barcode: 75374747
      },
      {
        name: "Pepsi Max Cherry",
        category: "Drinks",
        price: 0.5,
        barcode: 25252525
      }
    ]
  },
  members: [
    {
      id: 1,
      name: "Cone",
      balance: 4.5,
      frozen:0
    },
    {
      id: 2,
      name: "James",
      balance: -2.5,
      frozen:0
    },
    {
      id: 3,
      name: "Bor",
      balance: 4.5,
      frozen:0
    },
    {
      id: 4,
      name: "Gren",
      balance: 0,
      frozen:1
    },
    {
      id:  5,
      name: "Alex",
      balance: 0.5,
      frozen:0
    }
  ]
};

module.exports = config;
