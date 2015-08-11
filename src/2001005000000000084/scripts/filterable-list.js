        

        var Row = React.createClass({
            getInitialState: function() {
                return {
                    viewed: false
                };
            },
            handleClick: function(){
              this.setState({viewed: true});
            },
            render: function() {
                return (
                    <tr>
                        <td>{this.props.row.title}</td>
                        <td><a  onClick={this.handleClick}>view {this.state.viewed ? '(viewed)' : ''}</a></td>
                    </tr>
                );
            }
        });

        var Table = React.createClass({
            render: function() {
              var props = this.props;
              var rows = props.rows
                .filter(function(row){
                  return row.title.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
                })
                .map(function(row){
                  return <Row key={row.title} row={row} />;
                });


              return (
                  <div className='row spacer'>
                    <div className='col-lg-6 col-lg-offset-2'>
                      <table width='80%'>
                          <thead>
                              <tr>
                                  <th>Title</th>
                                  <th>Link</th>
                              </tr>
                          </thead>
                          <tbody>{rows}</tbody>
                      </table>
                    </div>
                  </div>
              );
            }
        });

        var SearchBar = React.createClass({
            handleChange: function() {
                this.props.onUserInput(
                    this.refs.filterTextInput.getDOMNode().value
                );
            },
            render: function() {
                return (
                    <div className='row '>
                      <div className='col-lg-6 col-lg-offset-2'>
                        <form onSubmit={this.handleSubmit}>
                          <input ref='filterTextInput' value={this.props.filterText} onChange={this.handleChange} type='search' className='form-control' placeholder='Filter' />
                        </form>
                      </div>
                    </div>
                );
            }
        });

        var FilterableTable = React.createClass({
            getInitialState: function() {
                return {
                    filterText: ''
                };
            },

            handleUserInput: function(filterText) {
                this.setState({
                    filterText: filterText
                });
            },

            render: function() {
                return (
                    <div className='spacer'>
                        <SearchBar onUserInput={this.handleUserInput} filterText={this.state.filterText} />
                        <Table filterText={this.state.filterText} rows={this.props.rows} />
                    </div>
                );
            }
        });



        var rows = [];
        for(var i=0; i< 1000; i++){
            rows.push({title: 'This is row # ' + i, viewed: false, date: new Date()});
        }

        React.renderComponent(<FilterableTable rows={rows} />, document.getElementById('filterable-list'));
