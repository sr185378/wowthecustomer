const comps = [
    {
        "ID": 22901,
        "IncentiveCategory": "Comp",
        "IncentiveType": "Percentage",
        "Name": "July Offers - 5% Off on Orders above $50",
        "Code": "JULY5PC50",
        "ApplicableCategory": "*",
        "OfferStart": "2022-07-01T00:00:00Z",
        "OfferEnd": "2022-07-31T00:00:00Z",
        "IncentiveDetails": {
            "DiscPercent": 5,
            "DiscThresholdAmount": 50
        }
    },
    {
        "ID": 22902,
        "IncentiveCategory": "Comp",
        "IncentiveType": "FixedDiscount",
        "Name": "Today's offer - $1.5 Off on all Desserts",
        "Code": "DESSERT1D5",
        "ApplicableCategory": "Desserts",
        "OfferStart": "2022-07-27T00:00:00Z",
        "OfferEnd": "2022-08-27T23:59.99Z",
        "IncentiveDetails": {
            "DiscAmount": "1.5"
        }
    },
    {
        "ID": 52901,
        "IncentiveCategory": "Promo",
        "IncentiveType": "BOGO",
        "Name": "500 ml Coke free with every Italian Pizza",
        "Code": "PIZZACOKE",
        "ApplicableCategory": "ItalianPizza",
        "OfferStart": "*",
        "OfferEnd": "*",
        "IncentiveDetails": {
            "DiscItemQty": 1
        }
    },
    {
        "ID": 52902,
        "IncentiveCategory": "Promo",
        "IncentiveType": "Coupon",
        "Name": "25% Off for Every Fifth Order (Max $50 Discount)",
        "Code": "FifthOrder25",
        "ApplicableCategory": "*",
        "OfferStart": "*",
        "OfferEnd": "*",
        "IncentiveDetails": {
            "DiscPercent": 25,
            "RepeatingOrderThreshold": 5
        }
    }
]

export default comps;