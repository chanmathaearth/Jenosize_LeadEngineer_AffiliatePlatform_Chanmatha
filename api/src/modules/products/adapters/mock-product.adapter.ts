export function mockFetchProductData(sourceUrl: string) {
  if (sourceUrl.includes('iphone')) {
    return {
      title: 'Apple iPhone 15',
      image_url:
        'https://www.istudio.store/cdn/shop/files/TH_iPhone_15_Black_PDP_Image_Position-1A_Black_Color.jpg?v=1707277868',
      offers: [
        {
          marketplace: 'Shopee',
          store_name: 'Apple Flagship Store',
          price: 23890,
          url: 'https://shopee.co.th/Apple-iPhone-15-(%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%88%E0%B8%B8-%E0%B8%AA%E0%B8%B5%E0%B9%84%E0%B8%94%E0%B9%89)-i.989284521.23454437584?extraParams=%7B%22display_model_id%22%3A147012207505%2C%22model_selection_logic%22%3A3%7D&sp_atk=32073db7-08c2-4e9e-8f25-4683764d4ee6&xptdk=32073db7-08c2-4e9e-8f25-4683764d4ee6',
        },
        {
          marketplace: 'Lazada',
          store_name: 'iStudio by SPVi',
          price: 23900,
          url: 'https://www.lazada.co.th/products/pdp-i4865260802-s20402071949.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Aiphone%252B15%253Bnid%253A4865260802%253Bsrc%253ALazadaMainSrp%253Brn%253Aeb2d7c5035285f5de699cd259c0efdcb%253Bregion%253Ath%253Bsku%253A4865260802_TH%253Bprice%253A23900%253Bclient%253Adesktop%253Bsupplier_id%253A100257618050%253Bsession_id%253A%253Bbiz_source%253Ah5_internal%253Bslot%253A0%253Butlog_bucket_id%253A470687%253Basc_category_id%253A3973%253Bitem_id%253A4865260802%253Bsku_id%253A20402071949%253Bshop_id%253A3968940%253BtemplateInfo%253A107882_E%2523-1_A3_C%2523&freeshipping=0&fs_ab=2&fuse_fs=&lang=en&location=Bangkok&price=2.39E%204&priceCompare=skuId%3A20402071949%3Bsource%3Alazada-search-voucher%3Bsn%3Aeb2d7c5035285f5de699cd259c0efdcb%3BoriginPrice%3A2390000%3BdisplayPrice%3A2390000%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1777628023967&qSellingPoint=b--iphone___p--15&ratingscore=4.976174718729318&request_id=eb2d7c5035285f5de699cd259c0efdcb&review=1511&sale=4404&search=1&source=search&spm=a2o4m.searchlist.list.0&stock=1',
        },
      ],
    };
  }

  if (sourceUrl.includes('airpods')) {
    return {
      title: 'Apple AirPods 4',
      image_url:
        'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1725502639798',
      offers: [
        {
          marketplace: 'Shopee',
          store_name: 'Studio7',
          price: 3810,
          url: 'https://shopee.co.th/%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%B8%E0%B8%94-Apple-AirPods-4-by-Studio-7-i.301786571.25886073904?extraParams=%7B%22display_model_id%22%3A89001159114%2C%22model_selection_logic%22%3A3%7D&sp_atk=5feb9a5c-ef88-4d63-93f7-2d0946a88c2d&xptdk=5feb9a5c-ef88-4d63-93f7-2d0946a88c2d',
        },
        {
          marketplace: 'Lazada',
          store_name: 'Apple Flagship Store',
          price: 3649,
          url: 'https://www.lazada.co.th/products/pdp-i5348942349-s22730653930.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Aairpod%252B4%253Bnid%253A5348942349%253Bsrc%253ALazadaMainSrp%253Brn%253Aea811925bd2231b32851c4ffaae3d52c%253Bregion%253Ath%253Bsku%253A5348942349_TH%253Bprice%253A3649%253Bclient%253Adesktop%253Bsupplier_id%253A1000001064%253Bsession_id%253A%253Bbiz_source%253Ah5_internal%253Bslot%253A0%253Butlog_bucket_id%253A470687%253Basc_category_id%253A7145%253Bitem_id%253A5348942349%253Bsku_id%253A22730653930%253Bshop_id%253A182839%253BtemplateInfo%253A107882_E%2523-1_A3_C%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=en&location=Chachoengsao&price=3649&priceCompare=skuId%3A22730653930%3Bsource%3Alazada-search-voucher%3Bsn%3Aea811925bd2231b32851c4ffaae3d52c%3BoriginPrice%3A364900%3BdisplayPrice%3A364900%3BsinglePromotionId%3A900000794292530%3BsingleToolCode%3AflashSale%3BvoucherPricePlugin%3A0%3Btimestamp%3A1777628242349&ratingscore=4.974513345374272&request_id=ea811925bd2231b32851c4ffaae3d52c&review=14949&sale=45030&search=1&source=search&spm=a2o4m.searchlist.list.0&stock=1',
        },
      ],
    };
  }

  return {
    title: 'Apple Watch SE 3',
    image_url:
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/se-case-segment-unselect-gallery-1-202509_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=MVJzakRnYkNBeGhJVXRMWm1ZV0F5cmdzSmpObkZCM3MrNmJ5SkhESlNDaFJEVjQ0MlcvUVoxL1VoTDV1VWY3SndNcFdFNWZtdVQ0djE1UTRwRU5lcXlaSE1Qa0haZTFvMWVJTkxjaWwxSnhKbjFEdDRrSHgvT2swbjFuK3FKVkhJMnBDdlFadGgyZXpQZHF4SmlacDln',
    offers: [
      {
        marketplace: 'Shopee',
        store_name: 'Apple Flagship Store',
        price: 7690,
        url: 'https://shopee.co.th/Apple-Watch-SE-3-GPS-Aluminium-Case-with-Sport-Band-i.989284521.42018557091?extraParams=%7B%22display_model_id%22%3A291523094742%2C%22model_selection_logic%22%3A3%7D&sp_atk=fa80b889-f966-4ec2-9c6f-e955f822fb19&xptdk=fa80b889-f966-4ec2-9c6f-e955f822fb19',
      },
      {
        marketplace: 'Lazada',
        store_name: 'Studio7',
        price: 7150,
        url: 'https://www.lazada.co.th/products/pdp-i5876364113-s25041220707.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Aapple%252Bwatch%252Bse3%253Bnid%253A5876364113%253Bsrc%253ALazadaMainSrp%253Brn%253A887c5c98fb488ca1650539c51a32001f%253Bregion%253Ath%253Bsku%253A5876364113_TH%253Bprice%253A7150%253Bclient%253Adesktop%253Bsupplier_id%253A100184550154%253Bsession_id%253A%253Bbiz_source%253Ah5_internal%253Bslot%253A1%253Butlog_bucket_id%253A470687%253Basc_category_id%253A10100415%253Bitem_id%253A5876364113%253Bsku_id%253A25041220707%253Bshop_id%253A1660725%253BtemplateInfo%253A107882_E%2523-1_A3_C%2523&freeshipping=0&fs_ab=2&fuse_fs=&lang=en&location=Samut%20Prakan&price=7.15E%203&priceCompare=skuId%3A25041220707%3Bsource%3Alazada-search-voucher%3Bsn%3A887c5c98fb488ca1650539c51a32001f%3BoriginPrice%3A715000%3BdisplayPrice%3A715000%3BsinglePromotionId%3A-1%3BsingleToolCode%3AmockedSalePrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1777628378432&qSellingPoint=b--apple___p--watch%20se3&ratingscore=4.967741935483871&request_id=887c5c98fb488ca1650539c51a32001f&review=31&sale=77&search=1&source=search&spm=a2o4m.searchlist.list.1&stock=1',
      },
    ],
  };
}