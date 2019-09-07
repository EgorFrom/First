// @flow
import React, {PureComponent} from 'react';
import {ScrollView, View, Text, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsList: {
    padding: 16,
  },
  containerNewsItem: {
    marginBottom: 8,
    padding: 4,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  flex1: {
    flex: 1,
  },
  title: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    marginBottom: 4,
    paddingBottom: 4,
  },
  titleText: {
    fontWeight: '500',
    fontSize: 16,
  },
  underlineData: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

type Props = {};

class Main extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {text: 'Useless Placeholder'};
  }

  newsItem = item => (
    <View style={styles.containerNewsItem}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
      <View style={styles.underlineData}>
        <View>
          <Text>{item.publishedAt}</Text>
        </View>
        <View>
          <Text>{item.source.name}</Text>
        </View>
      </View>
    </View>
  );

  render() {
    const {news} = this.props;
    return (
      <View style={styles.mainScreen}>
        <ScrollView>
          <FlatList
            keyExtractor={(item, index) => `${item.publishedAt}_${index}`}
            style={styles.newsList}
            data={news}
            renderItem={({item}) => this.newsItem(item)}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news.news,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
