const { Article } = require('../models');

exports.home = (req, res) => {
  const title = 'hello wadidwa',
    subTitle = 'welcome home';
  res.render('index', { title, subTitle });
};
exports.about = (req, res) => {
  const title = 'hello farhan',
    subTitle = 'welcome To About farhan';
  res.render('about', { title, subTitle });
};

exports.article = async (req, res) => {
  const title = 'hello wadidwa',
    subTitle = 'welcome home';
  const articles = await Article.findAll();
  console.log(articles);
  res.render('article', { title, subTitle, articles });
};
