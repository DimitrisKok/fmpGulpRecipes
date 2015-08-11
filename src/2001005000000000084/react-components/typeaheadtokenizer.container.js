'use strict';
/*
var ReactTypeahead = require('react-typeahead'),
    moment = require('moment'),
    d3 = require('d3'),
    R = require('ramda'),
    classNames = require('classnames');
*/


var betternessAccounts = [
{"account":"1","account":"Financial","account":"#004545"},
{"account":"2","account":"Creative","account":"#D92567"},
{"account":"3","account":"Environmental","account":"#B1B312"},
{"account":"4","account":"Emotional","account":"#F31D18"},
{"account":"5","account":"Intellectual","account":"#0083E6"},
{"account":"6","account":"Social","account":"#F25041"},
{"account":"7","account":"Ethical","account":"#979900"},
{"account":"8","account":"Organizational","account":"#45547B"},
{"account":"9","account":"Health","account":"#DBD9A9"},
{"account":"10","account":"Human","account":"#2EA6A6"},
{"account":"11","account":"Material","account":"#BFBFBF"},
{"account":"12","account":"Energy","account":"#F2913D"},
{"account":"13","account":"Skills","account":"#4A4A4A"}
];




var TypeaheadTokenizerContainer = React.createClass({
    handleClick(options){
        console.log(options);
        //this.props.triggerFilter(this.state.selected);
    },
    render(){
        var options = betternessAccounts.map((a)-> return a.account);
        var typeaheadName = "betterness accounts";
        return (
            <form>
              <div id="example"></div>
                  <ReactTypeahead.Tokenizer defaultValue=""
                    name={this.props.typeaheadName}
                    options={options} />
              <input type="submit" onClick={this.handleClick(this.getSelectedOptions)}></input>
            </form> );
    }

});


React.render( <TypeaheadTokenizerContainer />, document.getElementById('betterness'));






