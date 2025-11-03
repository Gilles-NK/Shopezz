/* script.js — version grille cartes produits populaires + panier dynamique */

// ----- Produits (exemples) -----
const PRODUCTS = [
    {
      id: 'p1',
      name: 'Chaussure italienne',
      category: 'Mode',
      price: 15000,
      oldPrice: 25000,
      img: 'https://i.pinimg.com/1200x/d8/e0/1e/d8e01ebf4340abb5b6bfc72d382f78b1.jpg'
    },
    {
      id: 'p2',
      name: 'Lampe de chevet',
      category: 'Maison',
      price: 10000,
      oldPrice: 15000,
      img: 'https://i.pinimg.com/736x/c7/55/e4/c755e4459a17e177fe755214b0730b13.jpg'
    },
    {
      id: 'p3',
      name: 'Montre connectée',
      category: 'Électronique',
      price: 15000,
      img: 'https://i.pinimg.com/1200x/d5/a7/d0/d5a7d05d56d6a4da06a95cded24dda11.jpg'
    },
    {
      id: 'p4',
      name: 'Alter de sport',
      category: 'Sport',
      price: 10000,
      img: 'https://i.pinimg.com/736x/19/6d/ea/196deada848d46b33f0f1a789bba8f98.jpg'
    },
    {
      id: 'p5',
      name: 'Cardigan en laine',
      category: 'Mode',
      price: 5000,
      img: 'https://i.pinimg.com/736x/1d/2f/e4/1d2fe4450bba74d9af6c2c709c9deb09.jpg'
    },
    {
      id: 'p6',
      name: 'Tapis de gym',
      category: 'Sport',
      price: 8000,
      oldPrice: 12000,
      img: 'https://i.pinimg.com/736x/45/02/86/45028694f0d5c548ee8e6a553216ea59.jpg'
    },
    {
      id: 'p7',
      name: 'Vases Décoratifs',
      category: 'Maison',
      price: 30000,
      img: 'https://i.pinimg.com/1200x/0e/d6/91/0ed691b6d604b6300abf9f2ee3e3a631.jpg'
    },
    {
      id: 'p8',
      name: 'Fauteuil cocon',
      category: 'Maison',
      price: 35000,
      img: 'https://i.pinimg.com/1200x/92/f6/e9/92f6e91e74fac1db4dcfb8d038021c59.jpg'
    },
    {
      id: 'p9',
      name: 'Sac cabas',
      category: 'Mode',
      price: 17500,
      img: 'https://i.pinimg.com/736x/d2/de/aa/d2deaabcc01d7d09ba5b882b77003427.jpg'
    },
    {
      id: 'p10',
      name: 'Street-wear',
      category: 'Mode',
      price: 12500,
      img: 'https://i.pinimg.com/1200x/32/af/f4/32aff428a5adecfcf68fbb4ec13e2a5d.jpg'
    },
    {
      id: 'p11',
      name: 'T-shirt oversid',
      category: 'Mode',
      price: 2000,
      oldPrice: 2500,
      img: 'https://i.pinimg.com/1200x/5c/c5/47/5cc547f31cf1060f9a99ab6c9de3b63d.jpg'
    },
    {
      id: 'p12',
      name: 'T-shirt sport feminin',
      category: 'Sport',
      price: 3000,
      img: 'https://i.pinimg.com/1200x/74/dc/d9/74dcd9d5e6e9880c90abf43dd16307a3.jpg'
    },
    {
      id: 'p13',
      name: 'vestes tendance',
      category: 'Mode',
      price: 15000,
      oldPrice: 25000,
      img: 'https://i.pinimg.com/1200x/42/6c/6c/426c6c0622bfb7da43f337d705486dc9.jpg'
    },
    {
      id: 'p14',
      name: 'Casques audio',
      category: 'Électronique',
      price: 20000,
      img: 'https://i.pinimg.com/1200x/30/ad/f2/30adf29846915cad2d809189e3affa3f.jpg'
    },
    {
      id: 'p15',
      name: 'Powerbanks',
      category: 'Électronique',
      price: 15000,
      img: 'https://i.pinimg.com/736x/c0/94/8b/c0948b196034f9dc43a76da600a1073e.jpg'
    },
    {
      id: 'p16',
      name: 'bandes élastiques',
      category: 'Sport',
      price: 10000,
      img: 'https://i.pinimg.com/1200x/9b/df/51/9bdf512b5bad5504c3f0e463b54190db.jpg'
    },
    {
      id: 'p17',
      name: 'Lunettes de soleil',
      category: 'Mode',
      price: 5000,
      oldPrice: 6500,
      img: 'https://i.pinimg.com/736x/30/16/60/301660a728e25a33827da9a3d42d2f09.jpg'
    },
    {
      id: 'p18',
      name: 'Ensemble de sport',
      category: 'Sport',
      price: 35000,
      oldPrice: 40000,
      img: 'https://i.pinimg.com/736x/4a/d4/7e/4ad47ee482955f9608e33a463d49d237.jpg'
    },
    {
      id: 'p19',
      name: 'Ensemble de sport 4pcs',
      category: 'Sport',
      price: 35000,
      img: 'https://i.pinimg.com/736x/13/ba/53/13ba53687d1ce2fdd2587e00f2b22623.jpg'
    },
    {
      id: 'p20',
      name: 'Casquette',
      category: 'Mode',
      price: 3500,
      img: 'https://i.pinimg.com/736x/09/7f/b7/097fb79c855f48778d85ee6b9f4f1449.jpg'
    },
    {
      id: 'p21',
      name: 'Debardeur Homme',
      category: 'Mode',
      price: 1500,
      img: 'https://i.pinimg.com/736x/3f/35/3c/3f353c38b5567d6a28592dc79efe6e1c.jpg'
    },
    {
      id: 'p22',
      name: 'Coussins décoratifs',
      category: 'Maison',
      price: 5000,
      img: 'https://i.pinimg.com/1200x/7a/ce/25/7ace2557008adb1ab8ed9d3ab7af48b7.jpg'
    },
    {
      id: 'p23',
      name: 'Diffuseurs d’huiles essentielles',
      category: 'Maison',
      price: 5000,
      img: 'https://i.pinimg.com/1200x/bf/37/f0/bf37f068e9fe8df621d36a8a076b189c.jpg'
    },
    {
      id: 'p24',
      name: 'Plaids et couvertures',
      category: 'Maison',
      price: 13000,
      img: 'https://i.pinimg.com/1200x/f6/b4/1e/f6b41e59942cae9b649ce86eaa08742a.jpg'
    },
    {
      id: 'p25',
      name: 'Horloges murales',
      category: 'Maison',
      price: 8000,
      img: 'https://i.pinimg.com/1200x/33/2e/d7/332ed750f1e244f489c629eec7203560.jpg'
    },
    {
      id: 'p26',
      name: 'Cadres photo',
      category: 'Maison',
      price: 5000,
      img: 'https://i.pinimg.com/1200x/f3/c3/7c/f3c37c75cd9d0e9398c1c21e53506ae7.jpg'
    },
    {
      id: 'p27',
      name: 'Petites étagères modulables',
      category: 'Maison',
      price: 25000,
      img: 'https://i.pinimg.com/736x/e2/7d/a5/e27da51087dedeebc32da1dd1d43b4a9.jpg'
    },
    {
      id: 'p28',
      name: 'Tables d’appoint',
      category: 'Maison',
      price:18000,
      img: 'https://i.pinimg.com/1200x/fd/d1/58/fdd1586b3417e207286b69e1aaa85d2e.jpg'
    },
    {
      id: 'p29',
      name: 'Paniers de rangement en osier',
      category: 'Maison',
      price: 15000,
      img: 'https://i.pinimg.com/736x/23/d2/69/23d2698819d43dea1e38b9d332086259.jpg'
    },
    {
      id: 'p30',
      name: 'Supports pour plantes et pots décoratifs',
      category: 'Maison',
      price: 30000,
      img: 'https://i.pinimg.com/736x/e0/1a/b9/e01ab9eec958317c0bc6f74bf4b5db3a.jpg'
    },
    {
      id: 'p31',
      name: 'Porte-serviettes et accessoires salle de bain',
      category: 'Maison',
      price: 50000,
      img: 'https://i.pinimg.com/1200x/13/f9/dd/13f9dd802cf43ead73cf52409486f7c4.jpg'
    },
    {
      id: 'p32',
      name: 'Bancs de rangement ou coffres',
      category: 'Maison',
      price: 50000,
      img: 'https://i.pinimg.com/1200x/81/c5/cf/81c5cf4cdfd49d8f41869ef0221bfec1.jpg'
    },
    {
      id: 'p33',
      name: 'Photophores',
      category: 'Maison',
      price: 5000,
      img: 'https://i.pinimg.com/736x/78/97/09/789709cd73f816296a2a8398d4488d28.jpg'
    },
    {
      id: 'p34',
      name: 'accessoires d’entrée',
      category: 'Maison',
      price: 55000,
      oldPrice: 60000,
      img: 'https://i.pinimg.com/1200x/52/44/f3/5244f3f8ff42a26d3818100313a05c4e.jpg'
    },
    {
      id: 'p35',
      name: 'Coussins d’extérieur imperméables',
      category: 'Maison',
      price: 15000,
      img: 'https://i.pinimg.com/1200x/76/ea/f7/76eaf7839b4a5955cee7d86582c2eb29.jpg'
    },
    {
      id: 'p36',
      name: 'Jardinières',
      category: 'Maison',
      price: 25000,
      img: 'https://i.pinimg.com/736x/7f/ed/d2/7fedd2864d7a3e651b96bb493af87d9e.jpg'
    },
    {
      id: 'p37',
      name: 'Caméras de sécurité domestiques',
      category: 'Maison',
      price: 25000,
      img: 'https://i.pinimg.com/736x/15/ad/e9/15ade9654bdfe65de29fea60c6ce2d70.jpg'
    },
    {
      id: 'p38',
      name: 'Sous plat',
      category: 'Maison',
      price: 8000,
      img: 'https://i.pinimg.com/1200x/e6/94/fb/e694fb7bec916000f512871677576080.jpg'
    },
    {
      id: 'p39',
      name: 'Écouteurs filaires',
      category: 'Électronique',
      price: 1500,
      img: 'https://i.pinimg.com/736x/79/66/96/796696c11c82d2c03a09a359cbf269aa.jpg'
    },
    {
      id: 'p40',
      name: 'Écouteurs sans fil (type AirPods)',
      category: 'Électronique',
      price: 6000,
      oldPrice: 10000,
      img: 'https://i.pinimg.com/736x/f3/c2/1b/f3c21b4231cb21609af3a067e2c27431.jpg'
    },
    {
      id: 'p41',
      name: 'Mini enceintes Bluetooth portables',
      category: 'Électronique',
      price: 15000,
      img: 'https://i.pinimg.com/1200x/5c/46/8e/5c468e2cfd4684fd2b6ec75f837799ca.jpg'
    },
    {
      id: 'p42',
      name: 'Enceintes connectées (Alexa, Google Home)',
      category: 'Électronique',
      price: 150000,
      img: 'https://i.pinimg.com/1200x/02/35/e2/0235e27ba54b7d7cfaba9f60aa92e863.jpg'
    },
    {
      id: 'p43',
      name: 'Kits karaoké',
      category: 'Électronique',
      price: 25000,
      oldPrice: 30000,
      img: 'https://i.pinimg.com/1200x/24/43/fc/2443fc142a8d7143a544c208b126256f.jpg'
    },
    {
      id: 'p44',
      name: 'Chargeurs sans fil',
      category: 'Électronique',
      price: 16000,
      img: 'https://i.pinimg.com/736x/38/0e/f7/380ef7712901b973dbb6149a1045222e.jpg'
    },
    {
      id: 'p45',
      name: 'Selfie sticks',
      category: 'Électronique',
      price: 5000,
      img: 'https://i.pinimg.com/736x/3c/67/88/3c6788165c61b4521056014a3d38ff17.jpg'
    },
    {
      id: 'p46',
      name: 'trépieds pour téléphone',
      category: 'Électronique',
      price: 15000,
      img: 'https://i.pinimg.com/736x/09/11/17/091117e7de03cfad14ae2bdcc827d952.jpg'
    },
    {
      id: 'p47',
      name: 'Casques gaming avec micro',
      category: 'Électronique',
      price: 20000,
      img: 'https://i.pinimg.com/736x/51/e0/9a/51e09ab15c920bfa5f31c8043230a96e.jpg'
    },
    {
      id: 'p48',
      name: 'Manettes de console',
      category: 'Électronique',
      price: 8000,
      img: 'https://i.pinimg.com/1200x/f0/76/a4/f076a42350a91a7a2889894230e9d6fa.jpg'
    },
    {
      id: 'p49',
      name: 'Petits aspirateurs robots',
      category: 'Électronique',
      price: 150000,
      img: 'https://i.pinimg.com/1200x/93/14/8b/93148b29d426bdc4dd9d75a000697feb.jpg'
    },
    {
      id: 'p50',
      name: 'Robots domestiques multifonctions',
      category: 'Électronique',
      price: 90000,
      img: 'https://i.pinimg.com/1200x/6a/e6/e7/6ae6e7e430ee1378d398f142c148f50d.jpg'
    },
    {
      id: 'p51',
      name: 'Détecteurs de fumée',
      category: 'Électronique',
      price: 45000,
      img: 'https://i.pinimg.com/1200x/13/6f/0e/136f0ef1104ed12e14d50eed166c54ac.jpg'
    },
    {
      id: 'p52',
      name: 'Mini drones',
      category: 'Électronique',
      price: 55000,
      img: 'https://i.pinimg.com/1200x/ef/cb/5b/efcb5bc8638d04950ab73e0e0aec38b6.jpg'
    },
    {
      id: 'p53',
      name: 'Lampes 3D',
      category: 'Électronique',
      price: 10000,
      img: 'https://i.pinimg.com/736x/b7/20/f6/b720f6b8860af46af24c92cfe5ac236b.jpg'
    },
    {
      id: 'p54',
      name: 'Lunettes VR',
      category: 'Électronique',
      price: 45000,
      img: 'https://i.pinimg.com/736x/8d/77/e9/8d77e92d06127187b685a4649ff402a6.jpg'
    },
    {
      id: 'p55',
      name: 'Serrures intelligentes',
      category: 'Électronique',
      price: 35000,
      img: 'https://i.pinimg.com/1200x/8d/61/95/8d6195397b04ae7dc97b06cc9977cd94.jpg'
    },
    {
      id: 'p56',
      name: 'Chemisiers légers',
      category: 'Mode',
      price: 7000,
      img: 'https://i.pinimg.com/1200x/5d/59/fe/5d59fe49d7d3e0500ee1672ecb781231.jpg'
    },
    {
      id: 'p57',
      name: 'Vestes en jean',
      category: 'Mode',
      price: 10500,
      img: 'https://i.pinimg.com/736x/81/dc/c6/81dcc61787253650e78ef83a7244fc25.jpg'
    },
    {
      id: 'p58',
      name: 'Robes casual',
      category: 'Mode',
      price: 1500,
      img: 'https://i.pinimg.com/1200x/d9/c2/2d/d9c22d07d1f0ede065602d8cb3bbb06d.jpg'
    },
    {
      id: 'p59',
      name: 'Robes de soirée',
      category: 'Mode',
      price: 50000,
      img: 'https://i.pinimg.com/736x/6a/97/8c/6a978cd6920aee5f4e14bceee09ceab5.jpg'
    },
    {
      id: 'p60',
      name: 'Pantalons casual',
      category: 'Mode',
      price: 9000,
      img: 'https://i.pinimg.com/736x/42/9c/e8/429ce897ccbaa3efc122d47ab18eebe5.jpg'
    },
    {
      id: 'p61',
      name: 'Jeans tendance',
      category: 'Mode',
      price: 8000,
      img: 'https://i.pinimg.com/736x/30/41/2a/30412a5e56d01fcd2783bc821b62e888.jpg'
    },
    {
      id: 'p62',
      name: 'Shorts d´éte',
      category: 'Mode',
      price: 5000,
      img: 'https://i.pinimg.com/736x/bc/d1/11/bcd1116a970b2a1e51b8cd9ce437e921.jpg'
    },
    {
      id: 'p63',
      name: 'Bermudas',
      category: 'Mode',
      price: 3000,
      img: 'https://i.pinimg.com/736x/4b/ed/0b/4bed0b027e1c4f287bb73f6deed4de3e.jpg'
    },
    {
      id: 'p64',
      name: 'Polos',
      category: 'Mode',
      price: 5000,
      img: 'https://i.pinimg.com/736x/a2/0c/22/a20c229f55ce64bcfd1b2e955dc76bb1.jpg'
    },
    {
      id: 'p65',
      name: 'Ceintures',
      category: 'Mode',
      price: 2000,
      img: 'https://i.pinimg.com/736x/87/cf/22/87cf22a06aad2e9b4da19724c72d3bfa.jpg'
    },
    {
      id: 'p66',
      name: 'Sacs bandoulière',
      category: 'Mode',
      price: 5000,
      img: 'https://i.pinimg.com/736x/2e/14/bd/2e14bd6626642f73686143a5df9b2852.jpg'
    },
    {
      id: 'p67',
      name: 'Chaussures de ville',
      category: 'Mode',
      price: 15000,
      img: 'https://i.pinimg.com/736x/f7/d1/93/f7d1935960f76dacce070027427f11c6.jpg'
    },
    {
      id: 'p68',
      name: 'Mocassins',
      category: 'Mode',
      price: 10000,
      img: 'https://i.pinimg.com/736x/3e/eb/e6/3eebe6c53ce774f8f9cf026e9121863f.jpg'
    },
    {
      id: 'p69',
      name: 'Talons et escarpins',
      category: 'Mode',
      price: 12000,
      img: 'https://i.pinimg.com/736x/01/35/05/0135051e1d642b59b6347597ea1435fe.jpg'
    },
    {
      id: 'p70',
      name: 'Baskets montantes',
      category: 'Mode',
      price: 10000,
      img: 'https://i.pinimg.com/736x/56/16/31/5616319c67b77e22c1261899f947f024.jpg'
    },
    {
      id: 'p71',
      name: 'Sacs à dos',
      category: 'Mode',
      price: 7000,
      img: 'https://i.pinimg.com/1200x/94/ea/5c/94ea5c09dd295e631132750d8c6acb6f.jpg'
    },
    {
      id: 'p72',
      name: 'Pochettes',
      category: 'Mode',
      price: 4000,
      img: 'https://i.pinimg.com/736x/93/a9/06/93a9063084f91e690f7d6f519ebfdbec.jpg'
    },
    {
      id: 'p73',
      name: 'T-shirts de sport respirants',
      category: 'Sport',
      price: 3000,
      img: 'https://i.pinimg.com/1200x/53/2d/2b/532d2b31377d8af50f4c5b85c9092884.jpg'
    },
    {
      id: 'p74',
      name: 'Débardeurs d’entraînement',
      category: 'Sport',
      price: 2000,
      img: 'https://i.pinimg.com/1200x/ce/e4/2c/cee42c858b530ae0f59b25e950fb6504.jpg'
    },
    {
      id: 'p75',
      name: 'Shorts de sport',
      category: 'Sport',
      price: 2500,
      img: 'https://i.pinimg.com/1200x/96/f2/3c/96f23c57e78136552c459370b76907ab.jpg'
    },
    {
      id: 'p76',
      name: 'Leggings de fitness',
      category: 'Sport',
      price: 3000,
      img: 'https://i.pinimg.com/1200x/e2/3a/09/e23a092c67be2442b13bfd5737a3e2ac.jpg'
    },
    {
      id: 'p77',
      name: 'Pantalons de jogging',
      category: 'Sport',
      price: 35000,
      img: 'https://i.pinimg.com/1200x/b0/72/74/b07274521ec183b33c9f35df1896fb0d.jpg'
    },
    {
      id: 'p78',
      name: 'Tenues de yoga',
      category: 'Sport',
      price: 15000,
      img: 'https://i.pinimg.com/1200x/1c/f3/bb/1cf3bb9ae857c6e7a3386012812d9d68.jpg'
    },
    {
      id: 'p79',
      name: 'Bouteilles d’eau réutilisables',
      category: 'Sport',
      price: 5000,
      img: 'https://i.pinimg.com/1200x/0a/c0/49/0ac049c8ee657fe0d8fe0bc41252e37c.jpg'
    },
    {
      id: 'p80',
      name: 'Sacs de sport',
      category: 'Sport',
      price: 3000,
      img: 'https://i.pinimg.com/736x/02/0f/ed/020feda4d2d7c66a1498274d14585806.jpg'
    },
    {
      id: 'p81',
      name: 'Serviettes de sport microfibre',
      category: 'Sport',
      price: 15000,
      img: 'https://i.pinimg.com/1200x/9a/b5/31/9ab53130f59e507fd59e1bd6fe00ab8a.jpg'
    },
    {
      id: 'p82',
      name: 'Casques de vélo',
      category: 'Sport',
      price: 5000,
      img: 'https://i.pinimg.com/1200x/30/fb/9e/30fb9e69d38550ad1ec22a4924889be8.jpg'
    },
    {
      id: 'p83',
      name: 'Chaussures de randonnée',
      category: 'Sport',
      price: 35000,
      img: 'https://i.pinimg.com/1200x/6e/c8/26/6ec826a5498dc00156a949c458feda9c.jpg'
    },
    {
      id: 'p84',
      name: 'Chaussures de tennis',
      category: 'Sport',
      price: 15000,
      img: 'https://i.pinimg.com/1200x/a4/51/91/a45191d2495bd794028d246e533ed545.jpg'
    },
    {
      id: 'p85',
      name: 'Maillots de basketball',
      category: 'Sport',
      price: 35000,
      img: 'https://i.pinimg.com/736x/9c/5d/02/9c5d023f9fada8b7f96ca211a492550b.jpg'
    },
    {
      id: 'p86',
      name: 'Short de bain',
      category: 'Sport',
      price: 3000,
      img: 'https://i.pinimg.com/736x/6a/d2/b2/6ad2b295b52ba04bb8e2cb6a90c889e4.jpg'
    },
    {
      id: 'p87',
      name: 'Tuba + masque',
      category: 'Sport',
      price: 6000,
      img: 'https://i.pinimg.com/1200x/db/2c/b7/db2cb7535dc1ad6cef6926a8daef4925.jpg'
    },
    {
      id: 'p88',
      name: 'Palmes',
      category: 'Sport',
      price: 7000,
      img: 'https://i.pinimg.com/1200x/ee/66/bb/ee66bbc336f26b4ffd73c712b8f00619.jpg'
    }
  ];
  
  // ----- Utilitaires -----
  const CART_KEY = 'shopezz_cart_v1';
  
  function loadCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.error('Erreur lecture cart', e);
      return {};
    }
  }
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
  function formatFCFA(n) {
    return n.toLocaleString('fr-FR') + ' FCFA';
  }
  
  // ----- Rendu des produits -----
  function renderProducts(products = PRODUCTS) {
    const container = document.getElementById('products');
    if (!container) return;
    container.innerHTML = '<div class="row g-4"></div>';
    const row = container.querySelector('.row');
  
    products.forEach(p => {
      const col = document.createElement('div');
      col.className = 'col-6 col-md-4 col-lg-3';
      col.innerHTML = `
        <div class="card h-100 shadow-sm border-0">
          <img src="${p.img}" class="card-img-top" alt="${p.name}" style="height:220px;object-fit:cover;">
          <div class="card-body text-center">
            <h6 class="card-title fw-semibold">${p.name}</h6>
            <p class="text-muted small mb-1">${p.category}</p>
           <p class="mb-2">
             ${p.oldPrice ? `<span class="text-decoration-line-through text-danger small d-block">${formatFCFA(p.oldPrice)}</span>` : ''}
             <strong>${formatFCFA(p.price)}</strong>
           </p>
  
            <div class="d-flex justify-content-center align-items-center mb-2">
              <input type="number" min="1" value="1" class="form-control form-control-sm w-25 me-2 qty-input" data-id="${p.id}">
              <button class="btn btn-warning btn-sm add-btn" data-id="${p.id}">
                <span class="material-icons" style="font-size:18px;vertical-align:middle;">add_shopping_cart</span>
              </button>
            </div>
          </div>
        </div>
      `;
      row.appendChild(col);
    });
  
    document.querySelectorAll('.add-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = e.currentTarget.dataset.id;
        const input = document.querySelector(`.qty-input[data-id="${id}"]`);
        const qty = Math.max(1, parseInt(input.value) || 1);
        addToCart(id, qty);
        toast('Produit ajouté au panier 🛍️');
      });
    });
  }
  
  // ----- Toast simple -----
  function toast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.position = 'fixed';
    t.style.bottom = '18px';
    t.style.right = '18px';
    t.style.background = '#0b2b4a';
    t.style.color = '#fff';
    t.style.padding = '10px 14px';
    t.style.borderRadius = '10px';
    t.style.zIndex = 9999;
    t.style.boxShadow = '0 8px 18px rgba(11,43,74,0.2)';
    document.body.appendChild(t);
    setTimeout(() => { t.style.transition = 'opacity 300ms'; t.style.opacity = 0; }, 1200);
    setTimeout(() => t.remove(), 1600);
  }
  
  // ----- Gestion du panier -----
  function addToCart(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const cart = loadCart();
    if (cart[productId]) cart[productId].qty += qty;
    else cart[productId] = { id: productId, qty: qty };
    saveCart(cart);
    updateCartCount();
  }
  
  function setQty(productId, qty) {
    const cart = loadCart();
    if (!cart[productId]) return;
    if (qty <= 0) delete cart[productId];
    else cart[productId].qty = qty;
    saveCart(cart);
    renderCartView();
    updateCartCount();
  }
  
  function removeFromCart(productId) {
    const cart = loadCart();
    if (cart[productId]) {
      delete cart[productId];
      saveCart(cart);
      renderCartView();
      updateCartCount();
    }
  }
  
  function clearCart() {
    localStorage.removeItem(CART_KEY);
    renderCartView();
    updateCartCount();
  }
  
  function cartTotal() {
    const cart = loadCart();
    let total = 0;
    Object.keys(cart).forEach(id => {
      const p = PRODUCTS.find(x => x.id === id);
      if (p) total += p.price * cart[id].qty;
    });
    return total;
  }
  
  // ----- Badge panier -----
  function updateCartCount() {
    const cart = loadCart();
    let count = 0;
    Object.values(cart).forEach(i => count += i.qty);
    const badge = document.getElementById('cart-count');
    if (badge) badge.textContent = count;
  }
  
  // ----- Vue panier -----
  function renderCartView() {
    const el = document.getElementById('cart-view');
    if (!el) return;
    const cart = loadCart();
    const ids = Object.keys(cart);
  
    if (ids.length === 0) {
      el.innerHTML = `<div class="text-center py-5"><h3>🛒 Ton panier est vide</h3><p>Ajoute des produits depuis la page d’accueil.</p></div>`;
      return;
    }
  
    const list = document.createElement('div');
    list.className = 'cart-list';
  
    ids.forEach(id => {
      const item = cart[id];
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return;
      const node = document.createElement('div');
      node.className = 'd-flex justify-content-between align-items-center border rounded p-3 mb-3 shadow-sm bg-white';
      node.innerHTML = `
        <div class="d-flex align-items-center gap-3">
          <img src="${p.img}" alt="${p.name}" style="width:80px;height:70px;object-fit:cover;border-radius:8px;">
          <div>
            <h6>${p.name}</h6>
            <small class="text-muted">${formatFCFA(p.price)} / unité</small>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-outline-secondary btn-sm" data-action="dec" data-id="${id}">−</button>
          <input class="form-control form-control-sm text-center" style="width:70px" type="number" min="1" value="${item.qty}" data-id="${id}">
          <button class="btn btn-outline-secondary btn-sm" data-action="inc" data-id="${id}">+</button>
          <button class="btn btn-danger btn-sm" data-action="rm" data-id="${id}">Supprimer</button>
        </div>
      `;
      list.appendChild(node);
    });
  
    const totalDiv = document.createElement('div');
    totalDiv.className = 'd-flex justify-content-between align-items-center bg-light p-3 rounded shadow-sm';
    totalDiv.innerHTML = `
      <div><strong>Total :</strong> ${formatFCFA(cartTotal())}</div>
      <button id="checkoutBtn" class="btn btn-primary">Payer via WhatsApp</button>
    `;
  
    el.innerHTML = '';
    el.appendChild(list);
    el.appendChild(totalDiv);
  
    el.querySelectorAll('[data-action="dec"]').forEach(b => {
      b.addEventListener('click', e => {
        const id = e.currentTarget.dataset.id;
        const input = el.querySelector(`input[data-id="${id}"]`);
        let v = parseInt(input.value) || 1;
        if (v > 1) v--;
        input.value = v;
        setQty(id, v);
      });
    });
    el.querySelectorAll('[data-action="inc"]').forEach(b => {
      b.addEventListener('click', e => {
        const id = e.currentTarget.dataset.id;
        const input = el.querySelector(`input[data-id="${id}"]`);
        let v = parseInt(input.value) || 1;
        v++;
        input.value = v;
        setQty(id, v);
      });
    });
    el.querySelectorAll('[data-action="rm"]').forEach(b => {
      b.addEventListener('click', e => {
        const id = e.currentTarget.dataset.id;
        removeFromCart(id);
      });
    });
  
  
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const cartObj = loadCart(); // ton objet panier
        const cartIds = Object.keys(cartObj);
    
        if (!user) {
          alert('Veuillez vous connecter pour finaliser la commande.');
          window.location.href = 'account.html';
          return;
        }
    
        if (cartIds.length === 0) {
          alert('Votre panier est vide.');
          return;
        }
    
        // Crée un tableau de produits avec info
        const cartArray = cartIds.map(id => {
          const p = PRODUCTS.find(x => x.id === id);
          return { name: p.name, price: p.price, qty: cartObj[id].qty };
        });
    
        const total = cartArray.reduce((sum, item) => sum + item.price * item.qty, 0);
    
        // Message WhatsApp
        const phoneNumber = '237689665893'; // ton numéro
        const message =
          `Bonjour 👋, je souhaite confirmer ma commande sur Shopezz.%0A%0A` +
          cartArray.map(item => `• ${item.name} (${item.qty} x ${item.price.toLocaleString()} FCFA)`).join('%0A') +
          `%0A%0A💰 Total : ${total.toLocaleString()} FCFA%0A` +
          `%0A👤 Nom : ${user.name}%0A📧 Email : ${user.email}`;
    
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
        // Enregistrer la commande
        const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
        existingOrders.push({ id: Date.now(), date: new Date().toLocaleDateString(), items: cartArray, total });
        localStorage.setItem('orders', JSON.stringify(existingOrders));
    
        // Vider le panier
        clearCart();
    
        // Rediriger vers WhatsApp
        window.location.href = whatsappUrl;
      });
    }
  }
       
  
  // ----- Init -----
  document.addEventListener('DOMContentLoaded', () => {
    const backBtnContainer = document.getElementById('backBtnContainer');
    const backBtn = document.getElementById('backBtn');
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
    
    renderProducts();
    renderCartView();
    updateCartCount();
  
    // ----- Filtrage par catégories -----
    function filterProductsByCategory(category) {
      const container = document.getElementById('products');
      if (!container) return;
  
      container.style.opacity = 0;
  
      setTimeout(() => {
        const filtered = PRODUCTS.filter(p => p.category === category);
        backBtnContainer.style.display = 'block';
        setTimeout(() => backBtnContainer.style.opacity = 1, 100);
  
        renderProducts(filtered);
        container.style.opacity = 1;
      }, 200);
    }
  
    // ----- Activation clic catégories -----
    document.querySelectorAll('.category-card').forEach(cat => {
      cat.addEventListener('click', e => {
        const category = e.currentTarget.dataset.category;
        filterProductsByCategory(category);
      });
    });
  
    // ----- Bouton Retour à l’accueil -----
    backBtn.addEventListener('click', () => {
      backBtnContainer.style.opacity = 0;
      setTimeout(() => {
        backBtnContainer.style.display = 'none';
      }, 300);
  
      const container = document.getElementById('products');
      container.style.opacity = 0;
      setTimeout(() => {
        renderProducts();
        container.style.opacity = 1;
      }, 200);
    });
    backBtnContainer.style.display = 'none';
    backBtnContainer.style.opacity = 0;
  
    // ----- Recherche dynamique par nom de produit -----
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(query));
        renderProducts(filtered);
      });
    }
  });

  
// ---------- Gestion du compte utilisateur ----------

// Vérifie si un utilisateur est connecté au chargement
document.addEventListener("DOMContentLoaded", () => {
  const accountBtn = document.getElementById("accountBtn");
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    accountBtn.textContent = "Mon compte";
    accountBtn.classList.replace("btn-outline-primary", "btn-success");
  }

  accountBtn.addEventListener("click", () => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) {
      // Si déjà connecté → proposer déconnexion
      if (confirm(`Déjà connecté en tant que ${currentUser.name}. Se déconnecter ?`)) {
        localStorage.removeItem("user");
        accountBtn.textContent = "Connexion";
        accountBtn.classList.replace("btn-success", "btn-outline-primary");
      }
    } else {
      // Si pas connecté → ouvrir un petit formulaire
      openLoginModal();
    }
  });
});

// ---------- Création du modal de connexion ----------
function openLoginModal() {
  const modalHTML = `
    <div class="modal fade" id="loginModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-3">
          <h5 class="modal-title text-center mb-3">Connexion / Inscription</h5>
          <div class="mb-3">
            <input type="text" id="nameInput" class="form-control" placeholder="Nom complet">
          </div>
          <div class="mb-3">
            <input type="email" id="emailInput" class="form-control" placeholder="Adresse e-mail">
          </div>
          <button id="saveUserBtn" class="btn btn-primary w-100">Se connecter</button>
        </div>
      </div>
    </div>
  `;

  // Injecte le modal si non présent
  if (!document.getElementById("loginModal")) {
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  }

  const modal = new bootstrap.Modal(document.getElementById("loginModal"));
  modal.show();

  document.getElementById("saveUserBtn").addEventListener("click", () => {
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();

    if (!name || !email) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const user = { name, email };
    localStorage.setItem("user", JSON.stringify(user));
    modal.hide();

    // Mettre à jour le bouton
    const accountBtn = document.getElementById("accountBtn");
    accountBtn.textContent = "Mon compte";
    accountBtn.classList.replace("btn-outline-primary", "btn-success");

    alert(`Bienvenue, ${name} ! Vous êtes maintenant connecté.`);
  });
}

