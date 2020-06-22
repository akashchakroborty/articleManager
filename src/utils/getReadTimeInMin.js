const getReadTimeInMin = (content) => {
  let wordCount = content.split(" ").length;
  let readTime = Math.floor(wordCount / 265);
  return `${readTime} min read`;
};

export default getReadTimeInMin;
