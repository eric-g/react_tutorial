const Notification = ({ message }) => {
   
    return (
        <div style={{height:25, paddingBottom:10, display:'block'}}>
            {message ? 
                <div className='error'>
                    {message}
                </div>
                : <div></div>}
            
        </div>
    )
  }

  export default Notification