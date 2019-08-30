import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import TenantForm from './TenantForm';
import { tenantUpdate, tenantSave, tenantDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class TenantEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.tenant, (value, prop) => {
      this.props.tenantUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, ID, house } = this.props;

    this.props.tenantSave({ name, phone, ID, house, uid: this.props.tenant.uid });
  }

  
  onAccept() {
    const { uid } = this.props.tenant;

    this.props.tenantDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <TenantForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        
        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Vacate Tenant
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone , ID, house} = state.tenantForm;

  return { name, phone, ID, house };
};

export default connect(mapStateToProps, {
  tenantUpdate, tenantSave, tenantDelete
})(TenantEdit);
