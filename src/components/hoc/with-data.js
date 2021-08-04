import React from 'react';
import Spinner from '../spinner';


const withData = (ComponentView, getData) => {
    return class extends React.Component {
        state = {
            data: null,
            load: true
        }

        componentDidMount() {
            this.updateItem()
        }

        updateItem() {
            getData().then((data) => {
                this.setState(
                    {
                        data: data,
                        load: false
                    }
                )
            })
        }

        render() {
            const content = (
                this.state.load ?
                    <Spinner /> :
                    <ComponentView
                        {...this.props}
                        data={this.state.data}
                    />
            )

            return content;
        }
    }
}


export default withData
