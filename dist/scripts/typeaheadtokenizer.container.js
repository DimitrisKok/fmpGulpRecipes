//'use strict';
/*
var ReactTypeahead = require('react-typeahead'),
    moment = require('moment'),
    d3 = require('d3'),
    R = require('ramda'),
    classNames = require('classnames');
*/


var betternessAccounts = [
{"account":"1","account":"Financial","color":"#004545"},
{"account":"2","account":"Creative","color":"#D92567"},
{"account":"3","account":"Environmental","color":"#B1B312"},
{"account":"4","account":"Emotional","color":"#F31D18"},
{"account":"5","account":"Intellectual","color":"#0083E6"},
{"account":"6","account":"Social","color":"#F25041"},
{"account":"7","account":"Ethical","color":"#979900"},
{"account":"8","account":"Organizational","color":"#45547B"},
{"account":"9","account":"Health","color":"#DBD9A9"},
{"account":"10","account":"Human","color":"#2EA6A6"},
{"account":"11","account":"Material","color":"#BFBFBF"},
{"account":"12","account":"Energy","color":"#F2913D"},
{"account":"13","account":"Skills","color":"#4A4A4A"}
];




var TypeaheadTokenizerContainer = React.createClass({
    handleClick: function(options){
        console.log(options);
        //this.props.triggerFilter(this.state.selected);
    },
    render: function(){
        var options = betternessAccounts.map(function(a){ return a.account;});
        var typeaheadName = "betterness accounts";
        return (
            <form>
                  <ReactTypeahead.Tokenizer defaultValue=""
                    name={this.props.typeaheadName}
                    options={options} 
                    onTokenAdd={function(token) { console.log('token added: ', token);}} 
                    />
              <input type="submit" onClick={this.getSelectedTokens}></input>
            </form> );
    }

});


//var betternessFilter = React.render( <TypeaheadTokenizerContainer />, document.getElementById('betterness'));
//React.render( <p>Hello</p>, document.getElementById('betterness'));

var betternessFilter = React.render(
          <ReactTypeahead.Tokenizer defaultValue="foo"
            name="betterness"
            options={betternessAccounts.map(function(a){ return a.account;})}
            defaultSelected={["Emotional",betternessAccounts[0].account]}
            onTokenRemove={function(tokenRemoved){console.log(tokenRemoved);}}
                                    onTokenAdd={function(tokenAdded) { console.log(tokenAdded);}}  />,
          document.getElementById("betterness")
        );




