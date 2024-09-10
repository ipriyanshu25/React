const Counter  = (props) => {
    console.log("Counter props:",props)
    
    
        const {buttonLabel, color, count, countButtonClick} = props;
      
        return (
            <>
            <h3> This Button is clicked {count} times</h3>
            <button onClick={() => countButtonClick()}style ={{borderColor: color}}>
                 {buttonLabel} 
                 </button>
            
            </>
        );
     };
    export default Counter;