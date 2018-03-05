var React=require('react');
var WeatherMessage=React.createClass({
        render:function(){
                return(
                        <div>
                                <h3 className="text-center">The Temperature in {this.props.location} is {this.props.temp} Celsius</h3>
                        </div>
                )
        }
});
module.exports=WeatherMessage;
