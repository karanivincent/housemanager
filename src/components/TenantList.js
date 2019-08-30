import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { tenantsFetch } from '../actions';
import ListItem from './ListItem';

class TenanatList extends Component {
  componentWillMount() {
    this.props.tenantsFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ tenants }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(tenants);
  }

  renderRow(tenant) {
    return <ListItem tenant={tenant} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const tenants = _.map(state.tenants, (val, uid) => {
    return { ...val, uid };
  });

  return { tenants };
};

export default connect(mapStateToProps, { tenantsFetch })(EmployeeList);
