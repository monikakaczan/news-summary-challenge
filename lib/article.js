(function(exports){
  function Article(text) {
    this.text = text

    this.returnASingleArticle = function() {
      return this.text
    };
  };
  exports.Article = Article
})(this);
