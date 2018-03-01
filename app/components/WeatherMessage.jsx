var React=require('react');
var WeatherMessage=React.createClass({
        render:function(){
                return(
                        <div>
                                <h2>The Temperature in {this.props.location} is {this.props.temp}</h2>
                        </div>
                )
        }
});
module.exports=WeatherMessage;
