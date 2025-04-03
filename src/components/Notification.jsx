const Notification = ({ message }) => {
   
    return (
        <div style={{height:25, marginBottom:10, display:'block'}}>
            {message ? 
                <div className={message.className}>
                    {message.message}
                </div>
                : <div></div>}
            
        </div>
    )
  }

  export default Notification