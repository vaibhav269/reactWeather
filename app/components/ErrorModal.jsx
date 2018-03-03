var React=require('react');
var ErrorModal=React.createClass({
        getDefaultProps:function(){
                return{
                                title:'Error'
                }
        },
        propTypes:{
                        title:React.PropTypes.string,
                        errorMessage:React.PropTypes.string.isRequired
        },
        componentDidMount:function(){
                var modal =  new Foundation.Reveal($('#error-modal'));
                modal.open();
        },
        render:function(){
                        return(
                                <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                                        <h4>{this.props.title}</h4>
                                        <p>{this.props.errorMessage}</p>
                                        <p>
                                                <button className="button hollow" data-close="">
                                                        Okay
                                                </button>
                                        </p>
                                </div>
                        )
        }
});
module.exports=ErrorModal;
