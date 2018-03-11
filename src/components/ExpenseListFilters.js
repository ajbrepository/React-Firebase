/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-03-10 16:46:33 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-03-11 16:49:40
 */

import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import {
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters';

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarFocused: null
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState(() => {
      return {
        calendarFocused: calendarFocused
      };
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            }
            if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

//Connect to Store
const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const ConnectedExpenseListFilters = connect(mapStateToProps)(
  ExpenseListFilters
);

//Export default
export default ConnectedExpenseListFilters;
