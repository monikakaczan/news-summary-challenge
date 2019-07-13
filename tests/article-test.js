function articleInstantiation(){
  var article = new Article("test article");
  assert.isTrue(article.returnASingleArticle() == "test article", arguments.callee.name)
};
articleInstantiation()
