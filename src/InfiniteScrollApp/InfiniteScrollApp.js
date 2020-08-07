import React, { Component } from 'react';
import InfiniteScroll from "react-infinite-scroller";
import axios from 'axios';

class InfiniteScrollApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            hasMoreItems: true,
            nextPage: 1
        };
    }

    loadItems(page) {
        const self = this;

        axios.get('http://openlibrary.org/search.json', {
            params: {
              q: "final fantasy",
              page: self.state.nextPage,
            },
          })
          .then(res => {
              console.log('res.data.docs.length', res.data.docs.length)
              if (res.data.docs.length > 0) {
                let books = self.state.books;
                res.data.docs.forEach((book) => {
                    books.push(book)
                });

                self.setState({
                    books: books,
                    nextPage: self.state.nextPage + 1
                })
              } else {
                self.setState({
                  hasMoreItems: false,
                });
              }
          });
    }

    render() {

        let books = this.state.books;

        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >

                {books.map((book, i) => {
                    return (<div className="book" key={i}>{i+1} - {book.title}</div>)
                })}

            </InfiniteScroll>
        );
    }
};

export default InfiniteScrollApp;