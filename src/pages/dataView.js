import React from 'react';
import Axios from 'axios';

class CheckData extends React.Component {

    state = {
        list: [],
        unmount:false
    }

    constructor(props) {

        super(props);
        this.getDate();  //calling it in ComponentDidMount is safer
    }

    getDate = () => {
        if(!this.state.unmount) {
            Axios({
                url: 'https://jsonplaceholder.typicode.com/albums',
                method: 'get'
            }).then(response => {
                this.setState({
                    list: response.data

                })
            }).catch(error => {
                console.log('error getting data from server');
            })
        }
    }

    componentWillUnmount() {
        this.setState({
            unmount:true
        })
    }

    render() {
        let child = (<div>nothing to show</div>);

        if (this.state.list.length > 0) {
            const titles = Object.keys(this.state.list[0]);
            titles.push("Action");

            child = (
                <div>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            {titles.map(title => {
                                return (
                                    <th> {title}</th>
                                )
                            })}
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.list.map((item) => {

                                let cells = titles.map((title) => {
                                    if (title !== "Action")

                                        return (
                                            <td> {item[title]}</td>
                                        )
                                    else
                                        return (
                                            <td>
                                                <button className="btn btn-danger"> delete</button>
                                            </td>
                                        );
                                });


                                return (
                                    <tr> {cells} </tr>
                                );
                            })}
                        </tbody>
                    </table>

                </div>

            );
        }
            return (
                child
            )

    }
}
export default CheckData;