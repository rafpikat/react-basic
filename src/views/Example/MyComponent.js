import React from 'react';

class MyComponent extends React.Component {
    /*

    Hàm render sử dụng cú pháp jsx
    jsx trả về html
    JSX luôn phải trả về một khối (1 phần tử), không được trả về một khối
    React.fragment sẽ giúp đóng gói lại các phần tử code (ở đây là trả về 2 thẻ div)
    React.fragment còn có một kiểu thể hiện khác là <></>

    */

    state = {
        // name: 'Ronaldo',
        // channel: 'youtube'
        firstname: "",
        lastname: ""
    }

    // handleOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value

    //     })

    // }

    // handleClickButton = () => {
    //     alert('click me')
    // }

    handleChangeFirstName = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleChangeLastNAme = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> Check data ', this.state)
    }
    render() {

        //let name = 'Truong';

        return (
            // <React.Fragment>
            //     <div className="first">
            //         {/* {console.log('My name is : ', name)}
            //         Hello My component, My name is {name} */}
            //         {/* {console.log('My name is: ', this.state.name)} */}
            //         <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
            //         Hello My component, My name is {this.state.name}

            //     </div>

            //     <div className="second">
            //         Fuck the World!
            //         My youtube chanel is {this.state.channel}
            //     </div>
            //     <div className="third">
            //         <button onClick={() => { this.handleClickButton() }}>Click me</button>
            //     </div>

            // </React.Fragment>
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstname}
                        onChange={(event) => { this.handleChangeFirstName(event) }}
                    /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastname}
                        onChange={(event) => { this.handleChangeLastNAme(event) }}
                    ></input><br /><br />
                    <input type="submit"
                        onClick={(event) => { this.handleSubmit(event) }}
                    />


                </form>

            </>

        )
    }

}

export default MyComponent;
