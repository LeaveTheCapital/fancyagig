const getGenres = gigs => {
  const genreObj = gigs.events.reduce((acc, gig) => {
    if (gig.classifications) {
      if (gig.classifications[0].segment) {
        if (gig.classifications[0].segment.name) {
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

const getGigsByGenre = (gigs, genre) => {
  return gigs.filter(gig => {
    if (gig.classifications) {
      return gig.classifications[0].genre.name === genre;
    }
    else return false;
  });
};

const getGigDetails = (gigs, id) => {
  const chosenGig = gigs.filter(gig => {
    return gig.id === id;
  })[0];
  const gigObj = {
    name: chosenGig.name,
    url: chosenGig.url,
    venue: chosenGig._embedded.venues[0].name,
    location: chosenGig._embedded.venues[0].location,
    image: chosenGig.images[0].url,
    date: chosenGig.dates.start.localDate,
    genre: chosenGig.classifications[0].genre.name,
    id: chosenGig.id
  };
  gigObj.info = chosenGig.pleaseNote
    ? chosenGig.pleaseNote
    : chosenGig.info
      ? chosenGig.info
      : null;

  if (gigObj.info || gigObj.pleaseNote) {
    if (gigObj.info) {
      if (gigObj.info.length > 130) {
        gigObj.info = gigObj.info.slice(0, 130) + '...'
      }
    } else if (gigObj.pleaseNote) {
      if (gigObj.pleaseNote.length > 130) {
        gigObj.pleaseNote = gigObj.pleaseNote.slice(0, 130) + '...'
      }
    }
  }

  gigObj.time = chosenGig.dates.start.localTime
    ? chosenGig.dates.start.localTime.slice(0, 5)
    : null;

  gigObj.genre +=
    chosenGig.classifications[0].subGenre.name !== undefined
      ? chosenGig.classifications[0].subGenre.name !== gigObj.genre
        ? "/" + chosenGig.classifications[0].subGenre.name
        : ""
      : "";
  return gigObj;
};

export { getGenres, getGigsByGenre, getGigDetails };
