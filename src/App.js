import React from 'react';
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

const searchClient = instantMeiliSearch(
  "http://127.0.0.1:7700",
  "myMasterKey1"
);

const App = () => (
  <InstantSearch
    indexName="movies"
    searchClient={searchClient}
  >
    <SearchBox />
    <Hits hitComponent={Hit} />
  </InstantSearch>
);


// const Hit = ({ hit }) => <Highlight attribute="name" hit={hit} />;
const Hit = ({ hit }) => <p>{hit.title}</p>;

export default App