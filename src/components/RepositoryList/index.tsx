import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import { ApplicationState } from '../../store';

// tipo das infos que vem do mapstatetoprops
interface StateProps {
  repositories: Repository[]
}

// Mapeia funcoes que vem to mapdispatch to props
interface DispatchProps {
  loadRequest(): void
}

// qualquer outra prop que vem de um component pai
// interface OwnProps {

// }

type Props = StateProps & DispatchProps

type Caceta = {
  name: string
}

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { repositories } = this.props;
    // const { name } = this.caceta;
    // console.log(`manameis ${name}`);
    return (
      <ul>
        {repositories.map((repository) => repository.name)}
      </ul>
    );
  }
}


const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  bindActionCreators(RepositoriesActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
