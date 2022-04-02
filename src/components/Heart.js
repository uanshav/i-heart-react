import HeartLogo from '../assets/logo.svg'


const Heart = (props) => {
    return (
        <div className='heart'>
            <img className='heart-img' src={HeartLogo}></img>
            <p className='heart-message'>{props.msg}</p>
        </div>
    );
}
export default Heart;