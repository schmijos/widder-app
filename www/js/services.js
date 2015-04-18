angular.module('starter.services', [])

.factory('Proposals', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var proposals = [{
    id: 0,
    name: 'Geiles Fleisch',
    duration: '30min',
    picture: 'http://dietfooddelivery.biz/wp-content/uploads/2014/06/cooked-meat.jpg'
  }, {
    id: 1,
    name: 'Hamburger',
    duration: '60min',
    picture: 'http://static.ddmcdn.com/gif/blogs/6a00d8341bf67c53ef015392ebc8e6970b-800wi.jpg',
    groceries: [
      {
        name: 'Toastbrot',
        amount: '200g',
        picture: 'https://38.media.tumblr.com/avatar_9109c5028afc_128.png'
      },
      {
        name: 'Salat',
        amount: '100g',
        picture: 'http://www.prixing.fr/images/product_images/7b9/7b9b4fbfafb3444de69ca4e3795e2a70.jpg'
      }
    ],
    steps: [
      {
        name: 'Toast zerpflücken und in eine Schüssel geben',
        description: 'feinere Stücke ergeben einen besseren Burger'
      },
      {
        name: 'Hackfleisch beimischen und kneten',
        description: 'solange bis sich eine feste Konsistenz ergibt'
      },
      {
        name: 'Burger formen',
        description: 'flachere Burger sind schneller durchgebraten'
      }
    ]
  }, {
    id: 2,
    name: 'Würstchen',
    duration: '90min',
    picture: 'http://conversation.which.co.uk/wp-content/uploads/2012/07/delicious-sausages.jpg',
    groceries: [
      {
        name: 'Toastbrot',
        amount: '200g',
        picture: 'https://38.media.tumblr.com/avatar_9109c5028afc_128.png'
      },
      {
        name: 'Salat',
        amount: '100g',
        picture: 'http://www.prixing.fr/images/product_images/7b9/7b9b4fbfafb3444de69ca4e3795e2a70.jpg'
      }
    ],
    steps: [
      {
        name: 'Toast zerpflücken und in eine Schüssel geben',
        description: 'feinere Stücke ergeben einen besseren Burger'
      },
      {
        name: 'Hackfleisch beimischen und kneten',
        description: 'solange bis sich eine feste Konsistenz ergibt'
      },
      {
        name: 'Burger formen',
        description: 'flachere Burger sind schneller durchgebraten'
      }
    ]
  }, {
    id: 3,
    name: 'Nothing',
    duration: '-',
    picture: 'http://www.psfk.com/wp-content/uploads/2009/03/to-do-list-nothing.jpg',
    groceries: [
      {
        name: 'Toastbrot',
        amount: '200g',
        picture: 'https://38.media.tumblr.com/avatar_9109c5028afc_128.png'
      },
      {
        name: 'Salat',
        amount: '100g',
        picture: 'http://www.prixing.fr/images/product_images/7b9/7b9b4fbfafb3444de69ca4e3795e2a70.jpg'
      }
    ],
    steps: [
      {
        name: 'Toast zerpflücken und in eine Schüssel geben',
        description: 'feinere Stücke ergeben einen besseren Burger'
      },
      {
        name: 'Hackfleisch beimischen und kneten',
        description: 'solange bis sich eine feste Konsistenz ergibt'
      },
      {
        name: 'Burger formen',
        description: 'flachere Burger sind schneller durchgebraten'
      }
    ]
  }];

  return {
    all: function() {
      return proposals;
    },
    get: function(proposalId) {
      for (var i = 0; i < proposals.length; i++) {
        if (proposals[i].id === parseInt(proposalId)) {
          return proposals[i];
        }
      }
      return null;
    }
  };
});
