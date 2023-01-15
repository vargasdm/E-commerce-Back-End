const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    // finds all categories
    const tagData = await Tag.findAll({
      // finds all products associated witht eh found categories
      include: [{model: Product}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    // finds one entry based on the id parameter
    const tagData = await Tag.findByPk(req.params.id, {
      // gets teh product associated with the category found by the id parameter
      include: [{ model: Product }],
    });
    
    // if there is no category/product associated with that id
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    // uses .create to create a category and the vlaue of that category will be the id from the post request that is made by the user
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    // updating the category_name of an instance of a category in the db with the category_name from the put request made by the user
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        // i am making this change where the id property from the category in the db is the same as the one used in the route of the put request
        where: {
          id: req.params.id,
        }
      }
    );
    // checking if the id exists in the db
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    // deleting an instance of the category model in the db
    const tagData = await Tag.destroy({
      // we are deleting the category that has an id property in the db that matches the id used in the delete request
      where: {
        id: req.params.id,
      },
    });
    // checking if the id exists in the db
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
