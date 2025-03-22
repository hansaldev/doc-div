module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("split", function(value, delimiter) {
    return value.split(delimiter);
  });

  eleventyConfig.addFilter("repeat", function(value, times) {
    return value.repeat(times);
  });
  return {
    dir: {
      input: "./src/pages",
      includes: "../templates",
      output: "dist",
    },
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
    pathPrefix: "",
  };
};
