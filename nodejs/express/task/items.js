const express = require('express');
const router = express.Router();
router.post('/items', (req, res, next) => {
let items={
   item1: {
        itemId:1,
        itemName:"Chocolate cake",
        itemDescription:"the chocolate cake is 5kg contains chocolates and fresh creams",
        itemPrice:2000,
    },
    item2: {
        itemId:2,
        itemName:"Lava cake",
        itemDescription:"the lava cake is 3kg filled with chocolates and fresh creams",
        itemPrice:3000,
    },
    item3: {
        itemId:3,
        itemName:" titan watch",
        itemDescription:"this a electronic watch from the titan company ",
        itemPrice:1000,
    },
    item4: {
        itemId:4,
        itemName:"silk saree",
        itemDescription:"this a pure silk saree from the weavers of kanchipuram",
        itemPrice:5000,
    }
    ,
    item5: {
        itemId:5,
        itemName:"printed shirts",
        itemDescription:"the fabric of this printed shirts is very nice to wear",
        itemPrice:500,
    },
    item6: {
        itemId:6,
        itemName:"suit",
        itemDescription:"this suit contains the designer works",
        itemPrice:1500,
    },
    item7: {
        itemId:7,
        itemName:"jeans",
        itemDescription:"the jeans fabric is comfortable",
        itemPrice:700,
    },
    item8: {
        itemId:8,
        itemName:"Gown",
        itemDescription:"these gowns are suitable for children to wear lite weight",
        itemPrice:800,
    }
}
res.send(items);
});
module.exports = router;