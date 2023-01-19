const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  try {
    // finds all categories
    const categoryData = await Category.findAll({
      // finds all products associated with the found categories
      include: [{model: Product}],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value 
  try {
    // finds one entry based on the id parameter
    const categoryData = await Category.findByPk(req.params.id, {
      // gets the products associated with the category found by the id parameter
      include: [{ model: Product }],
    });
    
    // checking if the id exists in the db
    if (!categoryData) {
      res.status(404).json({ message: 'No category/product found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    // uses .create to create a category and the vlaue of that category will be the id from the post request that is made by the user
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value 
  try {
    // updating the category_name of an instance of a category in the db with the category_name from the put request made by the user
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        // the change is being made where the id property from the category in the db is the same as the one used in the route of the put request
        where: {
          id: req.params.id,
        }
      }
    );
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    // deleting an instance of the category model in the db
    const categoryData = await Category.destroy({
      // we are deleting the category that has an id property in the db that matches the id used in the delete request
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
