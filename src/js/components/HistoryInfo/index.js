import { connect } from 'react-redux';
import HistoryInfo  from './HistoryInfo';

function mapStoreToProps(store) {
  return {
    cityLists: store.search.cityLists,
  };
}

export default connect(mapStoreToProps)(HistoryInfo);