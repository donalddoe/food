import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer ClzfndT3TTY9NYVibWNuI-tDCm2ovOwaxR9Gwd9PnvTJu7Wcyj5FyDOTsX_yYGYmSAb5bPVSZy9CaV5pCrD-0BUQQpE1l9yN6d7lQf1ML9k7kB-X5nxYh9cqEEi1YnYx'
  }
})


