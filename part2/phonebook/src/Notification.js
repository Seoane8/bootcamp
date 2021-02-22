
export const Notification = ({message}) => {

    return message === '' ?
        null :
        <div className="notification">
            {message}
        </div>

}