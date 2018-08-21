import React, {Component} from 'react';

var styles = {
    marginLeft: "auto",
    marginRight: "auto"
}

export default class Location extends Component {
    render() {
        return (

            <div className={"frosted main-content"} >
                <div className={"row"}>
                        <div className={"col address"}>
                            <h4>Address</h4>
                            <p>6405 S 3000 E <br/> Holladay, UT <br/> 84121</p>
                        </div>
                        <div className={"col"}>
                            <h4>Contact</h4>
                            <p>Phone: (801)943-1696 <br/> @: elixirloungeutah@gmail.com</p>
                        </div>
                </div>
                <div className={"row"}>
                <h4>Hours</h4>
                <h6 className={"hoursDay"}>M-Th+Sat:</h6><p className={"hours"}> 3p-1am || </p> <h6 className={"hoursDay"}>F:</h6><p className={"hours"}> 11am-1am || </p> <h6 className={"hoursDay"}>Sun:</h6><p className={"hours"}> 11am-10pm </p>
                </div>

                <div className={"row"}>
                        <iframe id={"map-frame"}
                                style={styles}
                                title={"map"}
                                width="600"
                                height="450"
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDh910CLOzjnQnbIgNZcjyRzy-LXAUosH0
    &q=Elixir+Lounge,Salt+Lake+City,Utah">
                        </iframe>
                    
                </div>
            </div>

        )
    }
}