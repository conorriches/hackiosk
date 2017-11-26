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
        category: "Food",
        price: 0.3,
        barcode: 1123123123
      },
      {
        name: "Smarties",
        category: "Food",
        price: 0.3,
        barcode: 1312321122
      },
      {
        name: "Pop Tarts",
        category: "Food",
        price: 0.5,
        barcode: 115222552
      },
      {
        name: "Large Noodle Pot",
        category: "Food",
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
        name: "Pepsi Max Cherry Can",
        category: "Drinks",
        price: 0.5,
        barcode: 25252525
      },
      {
        name: "Fanta Can",
        category: "Drinks",
        price: 0.5,
        barcode: 77477337
      },
      {
        name: "nodeMCU",
        category: "Sundries",
        price: 5,
        barcode: 8833383835
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
