const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category (category can have multiple products but a product can only belong to one category)
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (products to have multiple tags and tags have many products)
// uses Tag Model to connect the Product and ProductTag models using product_tag 
Product.belongsToMany(Tag, {
  through: "product_tag",
  foreignKey: "product_id",
});
// Tags belongToMany Products (products to have multiple tags and tags have many products)
// uses Tag Model to connect the Product and ProductTag models using product_tag through product_tag
Tag.belongsToMany(Product, {
  through: "product_tag",
  foreignKey: "tag_id",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
