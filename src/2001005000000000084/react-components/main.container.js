

var MainContainer = React.createClass({
    getInitialState(){
        return{
            projects_raw: [],
            projects_filtered: [],
            tasks_raw: [],
            tasks_filtered: [],
            pomodori_raw: [],
            pomodori_filtered: []//,
            //dateStart:,
            //dateEnd:, 
        }
    },
    componentWillMount(){
        this.filterAndSortProjects();
    },
    filterAndSortProjects(){

    },
	render() {
		return <div>Hello World!</div>;
	}

});