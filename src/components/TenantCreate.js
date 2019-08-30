import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tenantUpdate, tenantCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import TenantForm from './TenantForm';

class TenantCreate extends Component {
  onButtonPress() {
    const { name, phone, ID, house } = this.props;

    this.props.tenantCreate({ name, phone, ID, house});
  }

  render() {
    return (
      <Card>
        <TenantForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, ID, house } = state.tenantForm;

  return { name, phone, ID, house};
};

export default connect(mapStateToProps, {
  tenantUpdate, tenantCreate
})(TenantCreate);
