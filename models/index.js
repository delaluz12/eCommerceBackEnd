// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category -- define Category association with Products
Product.belongsTo(Category, {
  foreignKey: 'category_id',

  //delete the association when a product is deleted
  onDelete: 'CASCADE',

});

// Categories have many Products --- products are tied to categories based on category_id column in table/model
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag) --- define assoc. that products can belong to multiple productTags ---links product.js to productsTag.js
Product.belongsToMany(ProductTag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag) --- define assoc. that tags can belong to many products --- links tags.js to productTag.js
Tag.belongsToMany(ProductTag, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
