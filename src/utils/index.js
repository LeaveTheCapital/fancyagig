const getGenres = gigs => {
  const genreObj = gigs.events.reduce((acc, gig) => {
    if (gig.classifications) {
      if (gig.classifications[0].segment) {
        if (gig.classifications[0].segment.name === "Music") {
          acc[gig.classifications[0].genre.name]
            ? acc[gig.classifications[0].genre.name]++
            : (acc[gig.classifications[0].genre.name] = 1);
        }
      }
    }
    return acc;
  }, {});
  const outArr = [];
  for (let genre in genreObj) {
    outArr.push([genre, genreObj[genre]]);
  }
  return outArr;
};

const getGigsByGenre = () => {};

export { getGenres, getGigsByGenre };
