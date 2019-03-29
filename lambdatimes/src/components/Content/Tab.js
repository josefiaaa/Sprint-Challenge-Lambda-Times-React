import React from 'react';
import PropTypes from 'prop-types';


const Tab = props => {
  // const activeTab = props => {
  //   if (props.tab === props.selectedTab) {
  //     return 'tab active-tab'
  //   } else {
  //     return 'tab'
  //   }
  // }

  //don't know why that wasn't working but translated into ternary form so i could use active tab as the class name

  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

    const activeTab = props.tab === props.selectedTab ? 'tab active-tab' : 'tab';
  return (
    <div
      className={activeTab}
      onClick={() => {

        props.selectedTab(props.tab)

        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
 tab: PropTypes.string.isRequired,
 selectedTab: PropTypes.string.isRequired,
}

export default Tab;
