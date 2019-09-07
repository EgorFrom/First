// @flow

import React, {PureComponent} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {};

class Main extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {text: 'Useless Placeholder'};
  }

  render() {
    const {news} = this.props;
    console.log('news', news);
    return (
      <View style={styles.mainScreen}>
        <Text>Cheln</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={() => {}}
          value={news.length}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
