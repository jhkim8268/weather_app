import { connect } from 'react-redux';
import SearchEntries  from './SearchEntries';

function mapStoreToProps(store) {
  return {
    name: store.search.name,
  };
}

export default connect(mapStoreToProps)(SearchEntries);