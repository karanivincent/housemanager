import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { tenantUpdate } from '../actions';
import { CardSection, Input } from './common';

class TenantForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.tenantUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="0712345678"
            value={this.props.phone}
            onChangeText={value => this.props.tenantUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="ID"
            value={this.props.ID}
            onChangeText={value => this.props.tenantUpdate({ prop: 'ID value' })}
          />
        </CardSection>

          
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, ID, house } = state.tenantForm;

  return { name, phone, ID, house };
};

export default connect(mapStateToProps, { tenantUpdate })(TenantForm);
