## VenueX Task

Build a product listing page for an ecommerce website that displays details about specific products. The page should list the product's details (name, image, price, rating) and provides "Add to Cart" feature.

### UX Requirements:
- User should be able to see 6 product detail cards in a 3x2 grid as the default view
- User should be able to change the number of items in a row (3 or 4 grid size)
- User should be able to change the number of items in a page (Dropdown includes 3 options: 6, 12 items per page, or All items)
- User should be able to add item to cart via "Add to Cart" button on product detail card
- When user adds an item to cart, shopping cart icon's badge will increase by 1 indicating new item is added to cart

You can refer to wireframe below to give you hints for requirements listed above:

![](https://venuex-cdn.s3.eu-central-1.amazonaws.com/images/task/commerce.png)

### Tech Stack Requirements:
- Use ReactJS library and Hooks API
- Use react-query library to fetch remote data (for getting the product details)
- The product data should be fetched from the [mock product API](https://fakestoreapi.com/docs) which returns the product details in JSON format. `GET /products` endpoint supports `limit` query. Pagination is not supported here, hence not required. (Some UX requirements above is available using `limit` query)
- The page should handle errors gracefully if the product data cannot be retrieved from the API.
- The page should be fully responsive and accessible using [Material UI](https://mui.com/) components. Please do not use any other CSS libraries/frameworks
- Adding an item to shopping cart should be handled using **state**. For state management, please use [Recoil](https://recoiljs.org/)

### Evaluation Criteria:
- Code quality and consistent style
- Lint usage
- Proper handling of errors and edge cases
- Proper usage of hooks and state libraries