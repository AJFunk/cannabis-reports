## Cannabis Reports
A Cannabis Reports API wrapper for Node.js

[![Build Status](https://travis-ci.org/AJFunk/cannabis-reports.svg?branch=master)](https://travis-ci.org/AJFunk/cannabis-reports)

### Installation

```sh
npm install --save cannabis-reports
```

### Usage

```javascript
import { Strain, Flower, Extract, Edible, Product, Producer, SeedCompany, Dispensary } from 'cannabis-reports';
```
Only import the modules your need. For example, if you only need the `Strain` and `Extract` modules:
```javascript
import { Strain, Extract } from 'cannabis-reports';
```
To set your API Key, set the environment variable `CANNABIS_REPORTS_API_KEY`. Alternatively, you can set the configuration manually
```javascript
import { CannabisConfig } from 'cannabis-reports';
CannabisConfig.key('<your-api-key>')
```

## Strains
* [Strain.all()](#strain-all)
* [Strain.search()](#strain-search)
* [Strain.strain()](#strain-strain)
* [Strain.user()](#strain-user)
* [Strain.reviews()](#strain-reviews)
* [Strain.effectsFlavors()](#strain-effectsFlavors)
* [Strain.seedCompany()](#strain-seedCompany)
* [Strain.genetics()](#strain-genetics)
* [Strain.children()](#strain-children)
* [Strain.availability()](#strain-availability)

## Flowers
* [Flower.all()](#flower-all)
* [Flower.type()](#flower-type)
* [Flower.flower()](#flower-flower)
* [Flower.user()](#flower-user)
* [Flower.reviews()](#flower-reviews)
* [Flower.effectsFlavors()](#flower-effectsFlavors)
* [Flower.producer()](#flower-producer)
* [Flower.strain()](#flower-strain)
* [Flower.availability()](#flower-availability)

## Extracts
* [Extract.all()](#extract-all)
* [Extract.type()](#extract-type)
* [Extract.extract()](#extract-extract)
* [Extract.user()](#extract-user)
* [Extract.reviews()](#extract-reviews)
* [Extract.effectsFlavors()](#extract-effectsFlavors)
* [Extract.producer()](#extract-producer)
* [Extract.strain()](#extract-strain)
* [Extract.availability()](#extract-availability)

## Edibles
* [Edible.all()](#edible-all)
* [Edible.type()](#edible-type)
* [Edible.edible()](#edible-edible)
* [Edible.user()](#edible-user)
* [Edible.reviews()](#edible-reviews)
* [Edible.effectsFlavors()](#edible-effectsFlavors)
* [Edible.producer()](#edible-producer)
* [Edible.strain()](#edible-strain)
* [Edible.availability()](#edible-availability)

## Products
* [Product.all()](#product-all)
* [Product.type()](#product-type)
* [Product.product()](#product-product)
* [Product.user()](#product-user)
* [Product.reviews()](#product-reviews)
* [Product.effectsFlavors()](#product-effectsFlavors)
* [Product.producer()](#product-producer)
* [Product.strain()](#product-strain)
* [Product.availability()](#product-availability)

## Producers
* [Producer.all()](#producer-all)
* [Producer.producer()](#producer-producer)
* [Producer.user()](#producer-user)
* [Producer.extracts()](#producer-extracts)
* [Producer.edibles()](#producer-edibles)
* [Producer.products()](#producer-products)
* [Producer.availability()](#producer-availability)

## Dispensaries
* [Dispensary.all()](#dispensary-all)
* [Dispensary.dispensary()](#dispensary-dispensary)
* [Dispensary.strains()](#dispensary-strains)
* [Dispensary.extracts()](#dispensary-extracts)
* [Dispensary.edibles()](#dispensary-edibles)
* [Dispensary.products()](#dispensary-products)

## Seed Companies
* [SeedCompany.seedCompany()](#seedCompany-seedCompany)
* [SeedCompany.strains()](#seedCompany-strains)
* [SeedCompany.reviews()](#seedCompany-reviews)

- - -
<h3 id='strain-all'>Strain.all(options)</h3>
returns an Array of strain objects.

##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
	* `name` - Alphabetically stating with numeric strains. 0-9, A-Z.
	* `-name` - Alphabetically starting with Z and working back through numeric strains. Z-A, 9-0.
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Strain
  .all(options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-search'> Strain.search(query, options)</h3>
returns an Array of strain objects matching the search query.

##### `query` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Strain
  .search('orange')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-strain'>Strain.strain(ucpc)</h3>
returns a single strain object with the specified UCPC

##### `ucpc` (required) - [String]

```javascript
Strain
  .strain('VUJCJ4TYMG000000000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-user'>Strain.user(ucpc)</h3>
returns a single user object of the user who added the strain to the database.

##### `ucpc` (required) - [String]

```javascript
Strain
  .strain('VUJCJ4TYMG000000000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-reviews'>Strain.reviews(ucpc, options)</h3>
returns an array of reviews for a cannabis strain.

##### `ucpc` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Strain
  .reviews('VUJCJ4TYMG000000000000000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-effectsFlavors'>Strain.effectsFlavors(ucpc)</h3>
returns a object containing the average effects and flavors from reviews for this strain.

##### `ucpc` (required) - [String]

```javascript
Strain
  .effectsFlavors('VUJCJ4TYMG000000000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-seedCompany'>Strain.seedCompany(ucpc)</h3>
returns a object for the seed company that was responsible for a cannabis strain.

##### `ucpc` (required) - [String]

```javascript
Strain
  .seedCompany('VUJCJ4TYMG000000000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-genetics'>Strain.genetics(ucpc)</h3>
returns an array of strains that were the parent material for the strain with the given UCPC.

##### `ucpc` (required) - [String]

```javascript
Strain
  .genetics('VUJCJ4TYMG000000000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-children'>Strain.children(ucpc, options)</h3>
returns an array of the child strains that this strain has been bred into.

##### `ucpc` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Strain
  .children('VUJCJ4TYMG000000000000000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='strain-availability'>Strain.availability(ucpc, lat, lng, options)</h3>
returns an Array of information about the availability of a strain using latitude and longitude.

##### `ucpc` (required) - [String]
##### `lat` (required) - [String] or [Number]
##### `lng` (required) - [String] or [Number]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.
* `radius` - [Number] Radius to search for in miles, max 25.

```javascript
Strain
  .availability('VUJCJ4TYMG000000000000000', 37.7749295, -122.4194155, options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='flower-all'>Flower.all(options)</h3>
returns an Array of flower objects.

##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Flower
  .all(options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='flower-type'>Flower.type(flowerType, options)</h3>
returns an Array of products for a given type.

##### `flowerType` (required) - [String] (case-insensitive) Possible values:
* `flowers`
* `seeds`
* `clones`
* `shake`
##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Flower
  .type(flowerType, options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='flower-flower'>Flower.flower(ucpc)</h3>
returns a single flower object with the specified UCPC.

##### `ucpc` (required) - [String]

```javascript
Flower
  .flower('AHZ7H4N6467FVUDY3DAY00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='flower-user'>Flower.user(ucpc)</h3>
returns a single user object of the user who added the flower to the database.

##### `ucpc` (required) - [String]

```javascript
Flower
  .user('AHZ7H4N6467FVUDY3DAY00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='flower-reviews'>Flower.reviews(ucpc, options)</h3>
returns an array of reviews for a cannabis flower.

##### `ucpc` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Flower
  .reviews('AHZ7H4N6467FVUDY3DAY00000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='flower-effectsFlavors'>Flower.effectsFlavors(ucpc)</h3>
returns a object containing the average effects and flavors from reviews for this flower.

##### `ucpc` (required) - [String]

```javascript
Flower
  .effectsFlavors('AHZ7H4N6467FVUDY3DAY00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='flower-producer'>Flower.producer(ucpc)</h3>
returns a object for the producer of a flower.

##### `ucpc` (required) - [String]

```javascript
Flower
  .producer('AHZ7H4N6467FVUDY3DAY00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```
<h3 id='flower-strain'>Flower.strain(ucpc)</h3>
returns a object for the strain of a flower.

##### `ucpc` (required) - [String]

```javascript
Flower
  .strain('AHZ7H4N6467FVUDY3DAY00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='flower-availability'>Flower.availability(ucpc, lat, lng, options)</h3>
returns an Array of information about the availability of a flower using latitude and longitude.

##### `ucpc` (required) - [String]
##### `lat` (required) - [String] or [Number]
##### `lng` (required) - [String] or [Number]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.
* `radius` - [Number] Radius to search for in miles, max 25.

```javascript
Flower
  .availability('AHZ7H4N6467FVUDY3DAY00000', 37.7749295, -122.4194155, options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='extract-all'>Extract.all(options)</h3>
returns an Array of extract objects.

##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Extract
  .all(options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='extract-type'>Extract.type(extractType, options)</h3>
returns an Array of products for a given type.

##### `extractType` (required) - [String] (case-insensitive) Possible values:
* `kief`
* `hash`
* `water-hash`
* `oil`
* `wax`
* `crumble`
* `honeycomb`
* `shatter`
* `vaporizer-disposable`
* `vaporizer-cartridge`
##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Extract
  .type(extractType, options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='extract-extract'>Extract.extract(ucpc)</h3>
returns a single extract object with the specified UCPC.

##### `ucpc` (required) - [String]

```javascript
Extract
  .extract('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='extract-user'>Extract.user(ucpc)</h3>
returns a single user object of the user who added the extract to the database.

##### `ucpc` (required) - [String]

```javascript
Extract
  .user('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='extract-reviews'>Extract.reviews(ucpc, options)</h3>
returns an array of reviews for a cannabis extract.

##### `ucpc` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Extract
  .reviews('3CV7E33XLHTJT2XZ4GMD00000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='extract-effectsFlavors'>Extract.effectsFlavors(ucpc)</h3>
returns a object containing the average effects and flavors from reviews for this extract.

##### `ucpc` (required) - [String]

```javascript
Extract
  .effectsFlavors('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='extract-producer'>Extract.producer(ucpc)</h3>
returns a object for the producer of a extract.

##### `ucpc` (required) - [String]

```javascript
Extract
  .producer('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```
<h3 id='extract-strain'>Extract.strain(ucpc)</h3>
returns a object for the strain of a extract.

##### `ucpc` (required) - [String]

```javascript
Extract
  .strain('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='extract-availability'>Extract.availability(ucpc, lat, lng, options)</h3>
returns an Array of information about the availability of a extract using latitude and longitude.

##### `ucpc` (required) - [String]
##### `lat` (required) - [String] or [Number]
##### `lng` (required) - [String] or [Number]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.
* `radius` - [Number] Radius to search for in miles, max 25.

```javascript
Extract
  .availability('3CV7E33XLHTJT2XZ4GMD00000', 37.7749295, -122.4194155, options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='edible-all'>Edible.all(options)</h3>
returns an Array of edible objects.

##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Edible
  .all(options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='edible-type'>Edible.type(edibleType, options)</h3>
returns an Array of products for a given type.

##### `edibleType` (required) - [String] (case-insensitive) Possible values:
* `baked goods`
* `candy`
* `treat`
* `chocolate`
* `snack`
* `beverage`
* `pill`
* `tincture`
* `butter`
* `honey`
* `breath strips`
* `tea`
* `ice cream`
##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Edible
  .type(edibleType, options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='edible-edible'>Edible.edible(ucpc)</h3>
returns a single edible object with the specified UCPC.

##### `ucpc` (required) - [String]

```javascript
Edible
  .edible('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='edible-user'>Edible.user(ucpc)</h3>
returns a single user object of the user who added the edible to the database.

##### `ucpc` (required) - [String]

```javascript
Edible
  .user('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='edible-reviews'>Edible.reviews(ucpc, options)</h3>
returns an array of reviews for a cannabis edible.

##### `ucpc` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Edible
  .reviews('3CV7E33XLHTJT2XZ4GMD00000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='edible-effectsFlavors'>Edible.effectsFlavors(ucpc)</h3>
returns a object containing the average effects and flavors from reviews for this edible.

##### `ucpc` (required) - [String]

```javascript
Edible
  .effectsFlavors('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='edible-producer'>Edible.producer(ucpc)</h3>
returns a object for the producer of a edible.

##### `ucpc` (required) - [String]

```javascript
Edible
  .producer('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```
<h3 id='edible-strain'>Edible.strain(ucpc)</h3>
returns a object for the strain of a edible.

##### `ucpc` (required) - [String]

```javascript
Edible
  .strain('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='edible-availability'>Edible.availability(ucpc, lat, lng, options)</h3>
returns an Array of information about the availability of a edible using latitude and longitude.

##### `ucpc` (required) - [String]
##### `lat` (required) - [String] or [Number]
##### `lng` (required) - [String] or [Number]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.
* `radius` - [Number] Radius to search for in miles, max 25.

```javascript
Edible
  .availability('3CV7E33XLHTJT2XZ4GMD00000', 37.7749295, -122.4194155, options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='product-all'>Product.all(options)</h3>
returns an Array of product objects.

##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Product
  .all(options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='product-type'>Product.type(productType, options)</h3>
returns an Array of products for a given type.

##### `productType` (required) - [String] (case-insensitive) Possible values:
* `bath`
* `topical`
* `skin care`
* `pre-roll`
* `lip balm`
* `massage oil`
* `personal lubricant`
##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Product
  .type(productType, options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='product-product'>Product.product(ucpc)</h3>
returns a single product object with the specified UCPC.

##### `ucpc` (required) - [String]

```javascript
Product
  .product('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='product-user'>Product.user(ucpc)</h3>
returns a single user object of the user who added the product to the database.

##### `ucpc` (required) - [String]

```javascript
Product
  .user('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='product-reviews'>Product.reviews(ucpc, options)</h3>
returns an array of reviews for a cannabis product.

##### `ucpc` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Product
  .reviews('3CV7E33XLHTJT2XZ4GMD00000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='product-effectsFlavors'>Product.effectsFlavors(ucpc)</h3>
returns a object containing the average effects and flavors from reviews for this product.

##### `ucpc` (required) - [String]

```javascript
Product
  .effectsFlavors('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='product-producer'>Product.producer(ucpc)</h3>
returns a object for the producer of a product.

##### `ucpc` (required) - [String]

```javascript
Product
  .producer('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```
<h3 id='product-strain'>Product.strain(ucpc)</h3>
returns a object for the strain of a product.

##### `ucpc` (required) - [String]

```javascript
Product
  .strain('3CV7E33XLHTJT2XZ4GMD00000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='product-availability'>Product.availability(ucpc, lat, lng, options)</h3>
returns an Array of information about the availability of a product using latitude and longitude.

##### `ucpc` (required) - [String]
##### `lat` (required) - [String] or [Number]
##### `lng` (required) - [String] or [Number]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.
* `radius` - [Number] Radius to search for in miles, max 25.

```javascript
Product
  .availability('3CV7E33XLHTJT2XZ4GMD00000', 37.7749295, -122.4194155, options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='producer-all'>Producer.all(options)</h3>
returns an Array of producer objects.

##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
	* `name` - Alphabetically stating with numeric producers. 0-9, A-Z.
	* `-name` - Alphabetically starting with Z and working back through numeric producers. Z-A, 9-0.
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Producer
  .all(options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='producer-producer'>Producer.producer(ucpc)</h3>
returns a single producer object with the specified UCPC.

##### `ucpc` (required) - [String]

```javascript
Producer
  .producer('0000000000L6M7E0000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='producer-extracts'>Producer.extracts(ucpc, options)</h3>
returns an array of extracts for a cannabis producer.

##### `ucpc` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records

```javascript
Producer
  .extracts('0000000000L6M7E0000000000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='producer-edibles'>Producer.edibles(ucpc, options)</h3>
returns an array of edibles for a cannabis producer.

##### `ucpc` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records

```javascript
Producer
  .edibles('0000000000L6M7E0000000000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='producer-products'>Producer.products(ucpc, options)</h3>
returns an array of products for a cannabis producer.

##### `ucpc` (required) - [String]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records

```javascript
Producer
  .products('0000000000L6M7E0000000000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='producer-availability'>Producer.availability(ucpc, lat, lng, options)</h3>
returns an Array of information about the availability of a producer using latitude and longitude.

##### `ucpc` (required) - [String]
##### `lat` (required) - [String] or [Number]
##### `lng` (required) - [String] or [Number]
##### `options` (optional) - [Object]
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.
* `radius` - [Number] Radius to search for in miles, max 25.

```javascript
Producer
  .availability('0000000000L6M7E0000000000', 37.7749295, -122.4194155, options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='seedCompany-seedCompany'>SeedCompany.seedCompany(ucpc)</h3>
returns an individual seed company object with the specified UCPC.

##### `ucpc` (required) - [String]

```javascript
Product
  .seedCompany('VUJCJ00000000000000000000')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='seedCompany-strains'>SeedCompany.strains(ucpc, options)</h3>
returns an Array of strains offered by the specified seed company.

##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
SeedCompany
  .seedCompany('VUJCJ00000000000000000000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='seedCompany-reviews'>SeedCompany.reviews(ucpc, options)</h3>
returns an Array of reviews for the strains available from the seed company.

##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
SeedCompany
  .reviews('VUJCJ00000000000000000000', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='dispensary-all'>Dispensary.all(options)</h3>
returns an Array of dispensary objects.

##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
	* `name` - Alphabetically stating with numeric strains. 0-9, A-Z.
	* `-name` - Alphabetically starting with Z and working back through numeric strains. Z-A, 9-0.
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.

```javascript
Dispensary
  .all(options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='dispensary-dispensary'>Dispensary.dispensary(state, city, slug)</h3>
returns a individual dispensary object based on the state, city, and slug.

##### `state` (required) - [String] Two character state for the dispensary.
##### `city` (required) - [String] City the dispensary is in (kebab-case).
##### `slug` (required) - [String] Slug for the name of the dispensary.


```javascript
Dispensary
  .dispensary('ca', 'san-francisco', 'grass-roots')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='dispensary-strains'>Dispensary.strains(state, city, slug)</h3>
returns an Array of strains for a given dispensary

##### `state` (required) - [String] Two character state for the dispensary.
##### `city` (required) - [String] City the dispensary is in (kebab-case).
##### `slug` (required) - [String] Slug for the name of the dispensary.
##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.


```javascript
Dispensary
  .strains('ca', 'san-francisco', 'grass-roots', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='dispensary-extracts'>Dispensary.extracts(state, city, slug)</h3>
returns an Array of extracts for a given dispensary

##### `state` (required) - [String] Two character state for the dispensary.
##### `city` (required) - [String] City the dispensary is in (kebab-case).
##### `slug` (required) - [String] Slug for the name of the dispensary.
##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.


```javascript
Dispensary
  .extracts('ca', 'san-francisco', 'grass-roots', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='dispensary-edibles'>Dispensary.edibles(state, city, slug)</h3>
returns an Array of edibles for a given dispensary

##### `state` (required) - [String] Two character state for the dispensary.
##### `city` (required) - [String] City the dispensary is in (kebab-case).
##### `slug` (required) - [String] Slug for the name of the dispensary.
##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.


```javascript
Dispensary
  .edibles('ca', 'san-francisco', 'grass-roots', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

<h3 id='dispensary-products'>Dispensary.products(state, city, slug)</h3>
returns an Array of products for a given dispensary

##### `state` (required) - [String] Two character state for the dispensary.
##### `city` (required) - [String] City the dispensary is in (kebab-case).
##### `slug` (required) - [String] Slug for the name of the dispensary.
##### `options` (optional) - [Object]
* `sort` - [String] Possible values:
	* `createdAt` - Oldest records
	* `-createdAt` - Newest records
	* `updatedAt` - Oldest updated records
	* `-updatedAt` - Newest updated records
* `page` - [Number] By default, Cannabis Reports will return 10 records at a time for this API call. You can use the `page` argument to fetch the page of results you want. Check out the [pagination](https://developers.cannabisreports.com/docs/pagination) section of the documentation for further information.


```javascript
Dispensary
  .products('ca', 'san-francisco', 'grass-roots', options)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```
