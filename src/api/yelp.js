import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization : 'Bearer 1mGJSCk1tY4dxc3v949CRsRnpbbWjh1KPRe4O29BRrApoichEoTIB2jqdOFAa8ZVUgf4fjSezlV47NB2VkjXUnFzbDEL5y3X7YS37i8CbTHOnqbFfkY4HnBmxQxCYHYx'
    }
})