import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
const pages = [1, 2, 3];
export default class Paging extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            value : 1
        }
    }
    onClick(e, value) {
        e.preventDefault();
        console.log('value', value);
        this.setState({value : value});
        this.props.loadPage(value);

    }
    renderPaging(value , index) {
        return (
          <PaginationItem active={false} onClick={e => this.onClick(e, value)}>
            <PaginationLink href="#">{value}</PaginationLink>
          </PaginationItem>
        );
    }
    render() {
        return (
            <Pagination style={{ position: "absolute", bottom: -10 , right : 0, zIndex : 999}} size="sm" aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            {
                pages.map((value, index) => {
                    return this.renderPaging(value, index);
                })
            }
            <PaginationItem>
              <PaginationLink onClick={(e) => this.onClick(e, this.state.value+1)} next  />
            </PaginationItem>
          </Pagination>
        );
    }
}
