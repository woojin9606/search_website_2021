import React from "react";
import store from "../Store.js";
import { List } from "./List.js";
import { formatRelativeDate } from "../helpers.js";

export default class HistoryList extends List {
    componentDidMount() {
      this.fetch();
    }

    fetch(){
        const data = store.getHistoryList();
        this.setState({ data });
    }

    handleClickRemoveHistory(event, keyword) {
        event.stopPropagation();
    
        store.removeHistory(keyword);
        this.fetch();
      }
  
    renderItem(item, index) {
      return (
        <>
            <span>{item.keyword}</span>
            <span className="date">{formatRelativeDate(item.date)}</span>
            <button
              className="btn-remove"
              onClick={(event) => this.handleClickRemoveHistory(event, item.keyword)}
            />
        </>
      );
    }
  }
  