import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import AutocompleteSearchingComponent from './autocomplete.component'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
;
import * as headActions from '../actions/head.Action';

const styles = (theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
});
class HeaderComponent extends Component {
  render() {
    const {
      title,
      itemsList,
      classes,
      searchInputText,
      isSearchShown,
      isSearchInputShown,
      toggleSearchInput,
      updateSearchInputText,
    } = this.props;
    return (
      <>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            {title}
          </Typography>
          <AutocompleteSearchingComponent
            itemsList={itemsList}
            searchInputText={searchInputText}
            isSearchShown={isSearchShown}
            isSearchInputShown={isSearchInputShown}
            toggleSearchInput={(e) => toggleSearchInput(e)}
            updateSearchInputText={(e) => updateSearchInputText(e)}
          />
        </Toolbar>
      </>
    );
  }
}

HeaderComponent.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  searchInputText: PropTypes.string.isRequired,
  isSearchShown: PropTypes.bool.isRequired,
  isSearchInputShown: PropTypes.bool.isRequired,
  toggleSearchInput: PropTypes.func.isRequired,
  updateSearchInputText: PropTypes.func.isRequired,
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
      userId: PropTypes.number,
    }),
  ),
};

HeaderComponent.defaultProps = {
  itemsList: [],
};

const mapStateToProps = ({ header }) => ({
  searchInputText: header.searchInputText,
  isSearchShown: header.isSearchShown,
  isSearchInputShown: header.isSearchInputShown,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleSearchInput: headActions.toggleSearchInput,
  updateSearchInputText: headActions.updateSearchInputText,
}, dispatch);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(withStyles(styles)(HeaderComponent));
