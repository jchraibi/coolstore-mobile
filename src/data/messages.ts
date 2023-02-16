export interface Message {
  itemId: string;
  name: string;
  img: string;
  description: string;
  price: number;
  availability: { quantity: number; };
}

const messages: Message[] = [
 {
  "itemId" : "100000",
  "name" : "Red Fedora",
  "img" : "RedFedora",
  "description" : "Official Red Hat Fedora",
  "price" : 34.99,
  "availability" : {
    "quantity" : 0
  }
}, {
  "itemId" : "165613",
  "name" : "Knit socks",
  "img" : "KnitSocks",
  "description" : "Your brand will get noticed on these full color knit socks. Imported.",
  "price" : 4.15,
  "availability" : {
    "quantity" : 45
  }
}, {
  "itemId" : "329299",
  "name" : "Quarkus T-shirt",
  "img" : "QuarkusTshirt",
  "description" : "This updated unisex essential fits like a well-loved favorite, featuring a crew neck, short sleeves and designed with superior combed and ring- spun cotton.",
  "price" : 10.0,
  "availability" : {
    "quantity" : 35
  }
}, {
  "itemId" : "329199",
  "name" : "Pronounced Kubernetes",
  "img" : "PronouncedKubernetes",
  "description" : "Kubernetes is changing how enterprises work in the cloud. But one of the biggest questions people have is: How do you pronounce it?",
  "price" : 9.0,
  "availability" : {
    "quantity" : 12
  }
}, {
  "itemId" : "165614",
  "name" : "Quarkus H2Go water bottle",
  "img" : "QuarkusBottle",
  "description" : "Sporty 16. 9 oz double wall stainless steel thermal bottle with copper vacuum insulation, and threaded insulated lid. Imprinted. Imported.",
  "price" : 14.45,
  "availability" : {
    "quantity" : 87
  }
}, {
  "itemId" : "165954",
  "name" : "Patagonia Refugio pack 28L",
  "img" : "PatagoniaRefugio",
  "description" : "Made from 630-denier 100% nylon (50% recycled/50% high-tenacity) plain weave; lined with 200-denier 100% recycled polyester. ...",
  "price" : 6.0,
  "availability" : {
    "quantity" : 43
  }
}, {
  "itemId" : "444434",
  "name" : "Red Hat Impact T-shirt",
  "img" : "ImpactTshirt",
  "description" : "This 4. 3 ounce, 60% combed ringspun cotton/40% polyester jersey t- shirt features a slightly heathered appearance. The fabric laundered for reduced shrinkage. Next Level brand apparel. Printed.",
  "price" : 9.0,
  "availability" : {
    "quantity" : 32
  }
}, 
 {
  "itemId" : "444435",
  "name" : "Quarkus twill cap",
  "img" : "QuarkusCap",
  "description" : "100% cotton chino twill cap with an unstructured, low-profile, six-panel design. The crown measures 3 1/8 and this features a Permacurv visor and a buckle closure with a grommet.",
  "price" : 13.0,
  "availability" : {
    "quantity" : 53
  }
} 
]


/*
const messages: Message[] = [
  {
    fromName: 'Matt Chorsey',
    subject: 'New event: Trip to Vegas',
    date: '9:32 AM',
    id: 0
  },
  {
    fromName: 'Lauren Ruthford',
    subject: 'Long time no chat',
    date: '6:12 AM',
    id: 1
  },
  {
    fromName: 'Jordan Firth',
    subject: 'Report Results',
    date: '4:55 AM',
    id: 2

  },
  {
    fromName: 'Bill Thomas',
    subject: 'The situation',
    date: 'Yesterday',
    id: 3
  },
  {
    fromName: 'Joanne Pollan',
    subject: 'Updated invitation: Swim lessons',
    date: 'Yesterday',
    id: 4
  },
  {
    fromName: 'Andrea Cornerston',
    subject: 'Last minute ask',
    date: 'Yesterday',
    id: 5
  },
  {
    fromName: 'Moe Chamont',
    subject: 'Family Calendar - Version 1',
    date: 'Last Week',
    id: 6
  },
  {
    fromName: 'Kelly Richardson',
    subject: 'Placeholder Headhots',
    date: 'Last Week',
    id: 7
  }
];
*/

export const getMessages = () => messages;

export const getMessage = (id: string) => messages.find(m => m.itemId === id);
